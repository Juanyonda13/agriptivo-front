import axiosInstance from '../../api/axiosInstances'

const state = {
    process: null,
}
const mutations={
    LIST(state, process) {
        state.process = process
      },
}

const actions={
    async list({commit}){
        try{
          const response = await axiosInstance.get(`/api/process/user`)
          const { results } = response.data
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message)
        }
  },
}
const getters = {
    process: state => state.process,
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
