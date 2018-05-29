export default {
  isAuthenticated: (state) => {
    return state.user ? true : false
  }
}