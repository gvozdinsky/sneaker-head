export default {
  filteredProducts: (state) => {
    //razobratsea 4e tut
    return state.products.filter(product => {
      const brandFilter = state.filters.brand;
      const sizeFilter = state.filters.size;

      const brandFilterIsActive = Object.keys(brandFilter).length;
      const sizeFilterIsActive = Object.keys(sizeFilter).length;

      let ofBrand = true;
      let ofSize = true;

      if (brandFilterIsActive) {
        ofBrand = brandFilter[product.brand.code];
      }

      if (sizeFilterIsActive) {
        ofSize = product.sizes.some(size => sizeFilter[size])
      }

      return ofBrand && ofSize;
    })
  },
}