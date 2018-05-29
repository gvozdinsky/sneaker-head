export default {
  addToCart: (id) => ({
    type: 'ADD_CART_ITEM_REQUEST',
    id
  }),
  setCart: (cart) => ({
    type: 'SET_CART',
    cart
  }),
  addItem: (new_item) => ({
    type: 'ADD_CART_ITEM',
    new_item
  })
}