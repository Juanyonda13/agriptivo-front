// auth.js

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
            .post("api/auth/login", credentials) // Ruta de la API de inicio de sesión
            .then(response => {
              const user = response.data;
              commit("SET_USER", user);
              resolve(user);
            })
            .catch(error => {
              reject(error);
            });
        });
      },
    logout({ commit }) {
      commit('LOGOUT');
    }
};
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };