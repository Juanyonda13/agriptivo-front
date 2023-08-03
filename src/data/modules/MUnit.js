import axiosInstance from '../../api/axiosInstances';

const state = {
  mUnities: null,
};
const mutations = {
  LIST(state, mUnities) {
    state.mUnities = mUnities;
  },
};
const actions = {
  async register({ commit }, credentials) {
    try {
      const response = await axiosInstance.post("api/munit", credentials);
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
      const response = await axiosInstance.put(`api/munit/${id}`, credentials);
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
      const response = await axiosInstance.get(`/api/munits`);
      const { results } = response.data;
      commit('LIST', results)
    } catch (error) {
      throw new Error(error.message);
    }
  },
}
const getters = {
    mUnities: state => state.mUnities,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};