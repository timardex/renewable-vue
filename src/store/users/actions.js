import apiCall from '../utils/apiCall.js';

export const actions = {
  async getUsers({commit}) {
    const api = process.env.VUE_APP_BASE_URL
    try {
      const response = await apiCall(api);
      commit('GET_USERS', response);
    }
    catch (error) {
      throw new Error(`${error}`);
    }
  },

  async removeUser({commit}, payload) {
    await commit('REMOVE_USER', payload)
  },

  async addUser({commit}, payload) {
    await commit('ADD_USER', payload)
  },

  async sortBy({commit}, payload) {
    await commit('SORT_BY', payload)
  }
}