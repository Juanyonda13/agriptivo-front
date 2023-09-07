import axiosInstance from '../../api/axiosInstances'

const state = {
    subCategories: null,
};
const mutations = {
    LIST(state, subCategories) {
      state.subCategories = subCategories
    },
};
const actions={

    async  register({ commit }, credentials) {
        try {
            const response = await axiosInstance.post("api/subcategoria", credentials)
            const { data } = response
      
            if (data.status === "success" && data.message) {
              return data.message;
            } else {
              const error = new Error(data.message)
              error.data = data;
              throw error;
            }
          } catch (error) {
            throw new Error(error.message)
          }
    },
    async list({commit}){
        try{
          const response = await axiosInstance.get(`api/subcategorias`)
          const { results } = response.data
          commit('LIST',results)
        }catch(error){
          throw new Error(error.message)
        }
  },
}
const getters = {
    subCategories: state => state.subCategories,
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};