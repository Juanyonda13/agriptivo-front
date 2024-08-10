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
    async list({commit},id){
        try{
          const response = await axiosInstance.get(`/api/process/cultive/${id}`)
          const { results } = response.data
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message)
        }
    },
    async  register({ commit }, credentials) {
      try {
          const response = await axiosInstance.post("api/process", credentials)
          const { data } = response
    
          if (data.status === "success" && data.message) {
            return data.message
          } else {
            const error = new Error(data.message)
            error.data = data
            throw error
          }
        } catch (error) {
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
