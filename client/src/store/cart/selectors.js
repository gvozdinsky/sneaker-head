export default {
  checkoutSum: (state) => state.cart.reduce((sum, item) => {
    const product = item.product;
    return sum += item.quantity * product.price;
  }, 0),
}