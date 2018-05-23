import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("products")
@observer
class BrandsFilter extends Component {
  toggle = (code) => {
    this.props.products.toggleFilter('brand', code)
  }

  reset = () => {
    this.props.products.resetFilter('brand');
  }

  renderBrands = () => {
    const { products } = this.props;

    return products.brands.map(brand => {
      return (
        <div className={`brand ${products.filters.brand.has(brand.code) ? 'active' : ''}`} onClick={this.toggle.bind(this, brand.code)} key={brand.code}>
          {brand.name}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="brands filter">
        <div className="filter-header">
          <div className="title">Brands</div>
          <div onClick={this.reset} className="reset">reset</div>
        </div>
        <div className="choices">
          <div className="brands">
            {this.renderBrands()}
          </div>
        </div>
      </div>
    );
  }
}

export default BrandsFilter;