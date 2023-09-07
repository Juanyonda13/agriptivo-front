import axiosInstance from '../../api/axiosInstances';

const state = {
    veredas: null,
};
const mutations={
    LIST(state, veredas) {
        state.veredas = veredas;
      },
}

const actions={
    async list({commit},id){
        try{
          const response = await axiosInstance.get(`/api/selectedmunicipality/${id}`);
          const { results } = response.data;
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message);
        }
  },
}
const getters = {
    veredas: state => state.veredas,
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
