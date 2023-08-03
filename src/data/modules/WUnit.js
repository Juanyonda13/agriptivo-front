import axiosInstance from '../../api/axiosInstances';

const state = {
  wunits: null,
};
const mutations = {
  LIST(state, wunits) {
    state.wunits = wunits;
  },
};
const actions = {
  async register({ commit }, credentials) {
    try {
      const response = await axiosInstance.post("api/wunit", credentials);
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
      const response = await axiosInstance.put(`api/wunit/${id}`, credentials);
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
      const response = await axiosInstance.get(`/api/wunits`);
      const { results } = response.data;
      commit('LIST', results)
    } catch (error) {
      throw new Error(error.message);
    }
  },
}
const getters = {
    wunits: state => state.wunits,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};