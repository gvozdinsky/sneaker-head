export default {
  getProducts: () => ({
    type: 'REQUEST_PRODUCTS',
  }),
  setProducts: (products) => ({
    type: 'SET_PRODUCTS',
    products
  }),

  getProduct: (id) => ({
    type: 'REQUEST_PRODUCT',
    id
  }),
  setProductDetails: (product) => ({
    type: 'SET_PRODUCT_DETAILS',
    product
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