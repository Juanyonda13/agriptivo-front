import axiosInstance from "../../api/axiosInstances";

const state = {
  outsupplies: null,
};
const mutations = {
  LIST(state, outsupply) {
    state.outsupplies = outsupply;
  },
};
const actions = {
  async register({ commit }, credentials) {
    try {
      const response = await axiosInstance.post("api/outsupply", credentials);
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
        `api/outsupply/${id}`,
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
      const response = await axiosInstance.get(`/api/outsupplies/${id}`)
      const { results } = response.data;
      commit("LIST", results);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async delete({ commit }, { id }) {
    try {
      const response = await axiosInstance.delete(`api/outsupply/${id}`);
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
};
const getters = {
  outsupplies: (state) => state.outsupplies,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
