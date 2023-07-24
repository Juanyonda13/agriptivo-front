import axiosInstance from '../../api/axiosInstances';

const state = {
    municipalities: null,
};
const mutations={
    LIST(state, municipalities) {
        state.municipalities = municipalities;
      },
}

const actions={
    async list({commit}){
        try{
          const response = await axiosInstance.get(`/api/municipalities`);
          const { results } = response.data;
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message);
        }
  },
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