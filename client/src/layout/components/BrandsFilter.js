import React, { Component } from 'react';



class BrandsFilter extends Component {
  toggle = (code) => {
    this.props.toggleFilter('brand', code)
  }

  reset = () => {
    this.props.resetFilter('brand');
  }

  renderBrands = () => {
    const { brands, filter } = this.props;

    return brands.map(brand => {
      return (
        <div className={`brand ${filter[brand.code] ? 'active' : ''}`} onClick={this.toggle.bind(this, brand.code)} key={brand.code}>
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