export default {
  ADD_CART_ITEM: (state, { new_item }) => state.cart.push(new_item),
  SET_CART: (state, { cart }) => state.cart = cart,
}
