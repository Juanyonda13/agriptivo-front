import axiosInstance from '../../api/axiosInstances';

const state = {
    departamens: null,
};
const mutations={
    LIST(state, departamens) {
        state.departamens = departamens;
      },
}

const actions={
    async list({commit}){
        try{
          const response = await axiosInstance.get(`/api/departments`);
          const { results } = response.data;
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message);
        }
  },
}
const getters = {
    departamens: state => state.departamens,
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
