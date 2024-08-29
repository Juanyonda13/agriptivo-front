import axiosInstance from '../../api/axiosInstances'

const state = {
    report: null,
}
const mutations={
    LIST(state, report) {
        state.report = report
      },
}

const actions={
    async list({commit},id){
        try{
          const response = await axiosInstance.get(`api/report/${id}`)
          const { results } = response.data
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message)
        }
    },
}
const getters = {
    report: state => state.report,
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};