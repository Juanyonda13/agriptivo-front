import axiosInstance from '../../api/axiosInstances';

const state = {
  fincas: null,
};
const mutations = {
  LIST(state, finca) {
    state.fincas = finca;
  },
};
const actions = {
  async register({ commit }, credentials) {
    try {
      const response = await axiosInstance.post("api/finca", credentials);
      const { data } = response;

      if (data.status === "success" && data.message) {
        return data.message;
      } else {
        const error = new Error(data.message);
        error.data = data;
        throw error;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async update({ commit },{ credentials,id}) {
    try {
      console.log(credentials);
      const response = await axiosInstance.put(`api/finca/${id}`, credentials);
      const { data } = response;

      if (data.status === "success" && data.message) {
        return data.message;
      } else {
        const error = new Error(data.message);
        error.data = data;
        throw error;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async list({ commit }) {
    try {
      const response = await axiosInstance.get(`/api/fincas`);
      const { results } = response.data;
      commit('LIST', results)
    } catch (error) {
      throw new Error(error.message);
    }
  },
}
const getters = {
  fincas: state => state.fincas,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};