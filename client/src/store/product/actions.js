export default {
  getProducts: () => ({
    type: 'REQUEST_PRODUCTS',
  }),
  getProduct: (id) => ({
    type: 'REQUEST_PRODUCT',
    id
  }),

  toggleFilter: (filterName, value) => ({
    type: 'TOGGLE_PRODUCTS_FILTER',
    filterName,
    value
  }),
  resetFilter: (filterName) => ({
    type: 'RESET_PRODUCTS_FILTER',
    filterName
  })

}