import axiosInstance from '../../api/axiosInstances';


const showDepartamen = 'ShowDepartament'


const state = {
  municipalities: []
};
const mutations = {
  LIST(state, municipalities) {
    state.municipalities = municipalities;
  },
  [showDepartamen](state, departamentsMunicipalities) {
    state.municipalities = departamentsMunicipalities
  }
}

const actions = {
  /*List all municipalities */
  async list({ commit }) {
    try {
      const response = await axiosInstance.get(`/api/municipalities`);
      const { results } = response.data;
      commit('LIST', results)
    } catch (error) {
      throw new Error(error.message);
    }
  },
  /* List municipalities for departament */
  async departamentShow({ commit }, id) {
    try {
      const response = await axiosInstance.get(`/api/selecteddepartment/${id}`);
      const { results } = response.data;
      commit(showDepartamen, results)
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
const getters = {
  municipalities: state => state.municipalities,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};