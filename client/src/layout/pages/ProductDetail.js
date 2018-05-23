import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("products")
@observer
class ProductDetail extends Component {
  componentDidMount() {
    this.props.products.getProduct(this.props.match.params.id)
  }
  render() {
    const { products } = this.props;
    return (
      <div className="product-detail page">
        <p>Product detail {products.productDetail.name}</p>
      </div >
    )
  }
}

export default ProductDetail;