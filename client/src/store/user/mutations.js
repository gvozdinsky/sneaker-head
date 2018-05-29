export default {
  SET_USER: (state, { user, cart }) => {
    state.user = user;
    state.cart = cart;
  },
}
