import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("products")
@observer
class Sizes extends Component {

  toggle = (value) => {
    this.props.products.toggleFilter("size", value)
  }

  reset = () => {
    this.props.products.resetFilter('size');
  }

  render() {
    const { products } = this.props;

    return (
      <div className="sizes filter">
        <div className="filter-header">
          <div className="title">Sizes</div>
          <div onClick={this.reset} className="reset">reset</div>
        </div>
        <div className="choices">
          <div className="row sizes">
            {
              products.sizes.map(size => {
                return (
                  <div className="col-xs-4" onClick={this.toggle.bind(this, size)} key={`size-${size}`}>
                    <div className={`size ${products.filters.size.has(size) ? 'active' : ''}`}>
                      {size}
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    );
  }
}

export default Sizes;