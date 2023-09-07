import {axiosInstance} from '../../api/axiosInstances';

const state = {
    systems: null,
};
const mutations={
    LIST(state, systems) {
        state.systems = systems;
      },
}

const actions={
    async list({commit}){
        try{
          const response = await axiosInstance.get(`/api/sistemas`);
          const { results } = response.data;
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message);
        }
  },
}
const getters = {
    systems: state => state.systems,
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
