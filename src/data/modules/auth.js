import axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'
import Cookies from 'js-cookie'
import {encrypt,decrypt} from '../../helpers/encrypt'

const COOKIE_NAME = 'token'

const state = {
  loggedIn: false,
  token: [],
  user: {},
  token:null,
};

  const mutations = {
    LOGIN(state, user) {
      state.loggedIn = true
      state.user = user
    },
    LOGOUT(state) {
      state.loggedIn = false
      state.token = null
    },
    TOKEN(state,token){
      state.token=token
    },
  };

const actions = {


  async login({ commit }, credentials) {
    try {
      const response = await axios.post("auth/login", credentials)
      const { data } = response;

      // Verifica que la respuesta sea exitosa
      if (data.status === "success" && data.results) {
        const token = data.results;
        // Aquí puedes realizar la validación del token y decodificarlo si es necesario
        setUserIdCookie(token);
        const user = parseUserFromToken(token)
        commit("LOGIN", user);
        return token;
      } else {
        const error = new Error(data.message)
        error.data = data; // Adjunta la respuesta del API al error
        throw error;
      }
    } catch (error) {
      throw new Error(error.message)
    }
  },


  async register({ commit }, credentials) {
    try {
      const response = await axios.post("auth/register", credentials)
      const { data } = response;

      // Verifica que la respuesta sea exitosa
      if (data.status === "success" && data.message) {
        return data.message;
      } else {
        const error = new Error(data.message)
        error.data = data; // Adjunta la respuesta del API al error
        throw error;
      }
    } catch (error) {
      throw new Error(error.message)
    }
  },


  logout({ commit }) {
    removeUserIdCookie()
    commit('LOGOUT');
  },

  userInfo({ commit }) {
    const token=getDecryptedToken()
    const user = parseUserFromToken(token)
    commit("LOGIN",user)
    commit("TOKEN",token)
  }
};
const getters = {
  isLoggedIn: state => state.loggedIn,
  currentUser: state => state.user
};



function parseUserFromToken(token) {
  try {
      const decodedToken = VueJwtDecode.decode(token, 'JuanE%4')
      // Aquí puedes acceder a las propiedades del token decodificado y construir el objeto de usuario según tus necesidades
      const { _id, role } = decodedToken
      return { _id, role }
  } catch (error) {
    throw new Error('Error al decodificar el token')
  }
}

function setUserIdCookie(userId) {
  const encryptedUserId = encrypt(userId); // Aplica cifrado a los datos del usuario (implementa tu propio cifrado)
  Cookies.set(COOKIE_NAME, encryptedUserId, { expires: 7 }) // Establece la cookie cifrada con una fecha de caducidad de 7 días (ajusta según tus necesidades)
}

function getDecryptedToken() {
  const encryptedUserId = Cookies.get(COOKIE_NAME)
  if (encryptedUserId) {
    const decryptedUserId = decrypt(encryptedUserId) // Descifra los datos del usuario (implementa tu propio descifrado)
    return decryptedUserId;
  }
  return null;
}


function removeUserIdCookie() {
  Cookies.remove(COOKIE_NAME)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};