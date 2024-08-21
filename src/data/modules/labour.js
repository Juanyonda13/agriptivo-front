import axiosInstance from '../../api/axiosInstances'

const state = {
    labour: null,
}
const mutations={
    LIST(state, labour) {
        state.labour = labour
      },
}

const actions={
    async list({commit},id){
        try{
          const response = await axiosInstance.get(`/api/labour/process/${id}`)
          const { results } = response.data
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message)
        }
    },
    async  register({ commit }, credentials) {
      try {
          const response = await axiosInstance.post("api/labour", credentials)
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
    labour: state => state.labour,
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};