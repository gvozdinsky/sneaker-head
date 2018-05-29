export default {
  ADD_CART_ITEM: (state, { new_item }) => state.cart = state.cart.push(new_item),
}
