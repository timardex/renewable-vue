export const mutations = {
  GET_USERS(state, payload) {
    state.usersList = payload
  },
  REMOVE_USER(state, payload) {
    state.usersList = state.usersList.filter(value => value.name !== payload.name)
  },
  ADD_USER(state, payload) {
    state.usersList = state.usersList.concat(payload)
  },
}