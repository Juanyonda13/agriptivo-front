import axiosInstance from '../../api/axiosInstances'

const state = {
    jornareros: null,
}
const mutations={
    LIST(state, jornareros) {
        state.jornareros = jornareros
      },
}

const actions={
    async listJornareros({commit},id){
        try{
          const response = await axiosInstance.get(`api/usuario/role/${id}`)
          const { results } = response.data
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message)
        }
    },
}
const getters = {
    jornareros: state => state.jornareros,
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};