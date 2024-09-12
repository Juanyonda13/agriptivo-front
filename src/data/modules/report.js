import axiosInstance from "../../api/axiosInstances";

const state = {
  report: null,
};
const mutations = {
  LIST(state, report) {
    state.report = report;
  },
};

const actions = {
  async list({ commit }, id) {
    try {
      const response = await axiosInstance.get(`api/report/${id}`);
      const { results } = response.data;
      const { data } = response;

      if (data.status === "success" && data.message) {
        console.log("success");
        return data.message;
      } else if (results) {
        console.log("RESULTS");
        commit("LIST", results);
      } else {
        console.log("ERROR");
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
  report: (state) => state.report,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
