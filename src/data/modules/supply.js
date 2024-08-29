import axiosInstance from "../../api/axiosInstances";

const state = {
  supplies: null,
};
const mutations = {
  LIST(state, supply) {
    state.supplies = supply;
  },
};
const actions = {
  async register({ commit }, credentials) {
    try {
      const response = await axiosInstance.post("api/supply", credentials);
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
  async update({ commit }, { credentials, id }) {
    try {
      console.log(credentials);
      const response = await axiosInstance.patch(
        `api/supply/${id}`,
        credentials
      );
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
      const response = await axiosInstance.get(`/api/supplies/${id}`);
      const { results } = response.data;
      commit("LIST", results);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async listSuppliesProcess({commit},id){
    try {
      const response = await axiosInstance.get(`/api/supplies/process/${id}`);
      const { results } = response.data;
      commit("LIST", results);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
const getters = {
  supplies: (state) => state.supplies,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
