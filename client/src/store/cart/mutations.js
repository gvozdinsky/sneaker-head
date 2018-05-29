export default {
  ADD_CART_ITEM: (state, { new_item }) => state.cart.push(new_item),
  SET_CART: (state, { cart }) => state.cart = cart,
  REMOVE_CART_ITEM: (state, { id }) => state.cart = state.cart.filter(cartItem => cartItem._id !== id),
}
