import axiosInstance from '../../api/axiosInstances';

const state = {
    cultives: null,
};
const mutations = {
    LIST(state, cultive) {
      state.cultives = cultive;
    },
};
const actions={

    async  register({ commit }, credentials) {
        try {
            const response = await axiosInstance.post("api/cultivo", credentials);
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
    async list({commit}){
        try{
          const response = await axiosInstance.get(`/api/cultivos`);
          const { results } = response.data;
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message);
        }
  },
}
const getters = {
    cultives: state => state.cultives,
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};