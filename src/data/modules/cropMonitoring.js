import axiosInstance from '../../api/axiosInstances';

const state = {
  cropMonitoring: null,
};
const mutations = {
  LIST(state, cropMonitoring) {
    state.cropMonitoring = cropMonitoring;
  },
};
const actions = {
  async register({ commit }, credentials) {
    try {
      const response = await axiosInstance.post("api/medicion", credentials, { headers: {'Content-Type': 'multipart/form-data'} });
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
  async list({ commit },id) {
    try {
      const response = await axiosInstance.get(`/api/mediciones/${id}`);
      const { results } = response.data;
      commit('LIST', results)
    } catch (error) {
      throw new Error(error.message);
    }
  },
}
const getters = {
  cropMonitoring: state => state.cropMonitoring,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};