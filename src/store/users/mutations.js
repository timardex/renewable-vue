export const mutations = {
  GET_USERS(state, payload) {
    state.usersList = payload
    state.formTitles = payload.slice(0,1)
  },
  REMOVE_USER(state, payload) {
    state.usersList = state.usersList.filter(value => value.name !== payload.name)
  },
  ADD_USER(state, payload) {
    state.usersList = state.usersList.concat(payload)
  },
  SORT_BY(state, payload) {
    state.usersList = state.usersList.sort((a, b) => {
      if(payload.order) {
        return a[payload.sort].toLowerCase().split(' ') < b[payload.sort].toLowerCase().split(' ') ? -1 : 1
      } 
      return a[payload.sort].toLowerCase().split(' ') > b[payload.sort].toLowerCase().split(' ') ? -1 : 1
    })
  },
  SEARCH_FILTER(state, payload) {
    state.searchQuery = payload
  },
  USER_NOTIFICATION(state, payload) {
    state.userName = payload.name
    state.userAddedRemoved = payload.notification

    setTimeout(() => {
      state.userName = ''
      state.userAddedRemoved = ''
    }, 3000)
  }
}