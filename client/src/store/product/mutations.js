export default {
  REQUEST_PRODUCTS: (state) => state.isLoading = true,
  SET_PRODUCTS: (state, { products }) => {
    state.products = products
    state.isLoading = false;
  },
  SET_PRODUCT_DETAILS: (state, { product }) => {
    state.productDetails = product
  },
  TOGGLE_PRODUCTS_FILTER: (state, { filterName, value }) => {
    const filter = state.filters[filterName];
    filter[value] ? delete filter[value] : filter[value] = true;
  },
  RESET_PRODUCTS_FILTER: (state, { filterName, value }) => {
    state.filters[filterName] = {};
  },
}
