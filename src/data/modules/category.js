import {axiosInstance} from '../../api/axiosInstances';

const state = {
    categories: null,
};
const mutations={
    LIST(state, categories) {
        state.categories = categories;
      },
}

const actions={
    async list({commit},id){
        try{
          const response = await axiosInstance.get(`/api/selectedsystem/${id}`);
          const { results } = response.data;
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message);
        }
  },
}
const getters = {
    categories: state => state.categories,
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
