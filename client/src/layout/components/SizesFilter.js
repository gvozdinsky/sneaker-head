import React, { Component } from 'react';

class Sizes extends Component {

  toggle = (value) => {
    this.props.toggleFilter("size", value)
  }

  reset = () => {
    this.props.resetFilter('size');
  }

  render() {
    const { sizes, filter } = this.props;

    return (
      <div className="sizes filter">
        <div className="filter-header">
          <div className="title">Sizes</div>
          <div onClick={this.reset} className="reset">reset</div>
        </div>
        <div className="choices">
          <div className="row sizes">
            {
              sizes.map(size => {
                return (
                  <div className="col-xs-4" onClick={this.toggle.bind(this, size)} key={`size-${size}`}>
                    <div className={`size ${filter[size] ? 'active' : ''}`}>
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