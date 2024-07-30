import axios from 'axios'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const COOKIE_NAME = 'token'

const state = {
  loggedIn: false,
  token: [],
  user: {},
  token:null,
}

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
  }

const actions = {


  async login({ commit }, credentials) {
    try {
      const response = await axios.post("auth/login", credentials)
      const { data } = response
      if (data.status === "success" && data.results) {
        const token = data.results
        let user = jwtDecode(token)
        Cookies.set(COOKIE_NAME, token, { expires: 7 })
        commit("LOGIN", user)
        return token
      } else {
        const error = new Error(data.message)
        error.data = data 
        throw error
      }
    } catch (error) {
      throw new Error(error.message)
    }
  },


  async register({ commit }, credentials) {
    try {
      const response = await axios.post("auth/register", credentials)
      const { data } = response

      if (data.status === "success" && data.message) {
        return data.message
      } else {
        const error = new Error(data.message)
        error.data = data 
        throw error
      }
    } catch (error) {
      throw new Error(error.message)
    }
  },


  logout({ commit }) {
    removeUserIdCookie()
    commit('LOGOUT')
  },

  userInfo({ commit }) {
    const token = Cookies.get('token')
    let user = jwtDecode(token)
    commit("LOGIN",user)
    commit("TOKEN",token)
  }
}
const getters = {
  isLoggedIn: state => state.loggedIn,
  currentUser: state => state.user
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
}