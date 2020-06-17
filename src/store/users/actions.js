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
}