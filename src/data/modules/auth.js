import axios from 'axios';

const state = {
    loggedIn: false,
    user: null
  };
  
const mutations = {
    LOGIN(state, user) {
      state.loggedIn = true;
      state.user = user;
    },
    LOGOUT(state) {
      state.loggedIn = false;
      state.user = null;
    }
};
  
const actions = {
    login({ commit }, credentials) {
        return new Promise((resolve, reject) => {
          axios
            .post("auth/login", credentials) // Ruta de la API de inicio de sesión
            .then(response => {
              const user = response.data;
              commit("LOGIN", user);
              resolve(user);
            })
            .catch(error => {
              reject(error);
            });
        });
      },
    register({ commit }, credentials){
        return new Promise((resolve, reject) => {
            axios
              .post("auth/register", credentials) 
              .then(response => {
                resolve(response.data)
              })
              .catch(error => {
                reject(error);
              });
          });
    },

    logout({ commit }) {
      commit('LOGOUT');
    },
};
const getters = {
  isLoggedIn: state => state.loggedIn,
  currentUser: state => state.user
};
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };