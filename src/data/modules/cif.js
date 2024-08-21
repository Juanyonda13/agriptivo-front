import axiosInstance from '../../api/axiosInstances'

const state = {
    cif: null,
}
const mutations={
    LIST(state, cif) {
        state.cif = cif
      },
}

const actions={
    async list({commit},id){
        try{
          const response = await axiosInstance.get(`/api/cif/process/${id}`)
          const { results } = response.data
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message)
        }
    },
    async  register({ commit }, credentials) {
      try {
          const response = await axiosInstance.post("api/cif", credentials)
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
    cif: state => state.cif,
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};