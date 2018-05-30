import React, { Component } from 'react';
import NumberInput from 'layout/components/NumberInput';
import Button from 'layout/components/Button';
import { Link } from 'react-router-dom';
import { connectStore } from 'redux-box';
import { module as productModule } from 'store/product';
import { module as cartModule } from 'store/cart';
import { module as userModule } from 'store/user';


class ProductDetail extends Component {
  state = {
    size: '',
    quantity: 1
  }

  handleQuantityChange = (value, strValue, inp) => {
    this.setState({
      quantity: value
    });
  }
  handleSizeChange = (e) => {
    const value = Number(e.target.value);
    this.setState({
      size: value
    })
  }

  renderSizes = () => {
    const { productDetails } = this.props.productModule;
    const options = productDetails.sizes.map(size => {
      return (
        <option value={size} key={size}>
          {`EU-${size}`}
        </option>
      )
    })
    return (
      [
        <option key="first" disabled value="">{options.length ? "Select size ..." : "No sizes"}</option>,
        ...options
      ]
    )
  }

  addToCart = () => {
    const { id } = this.props.productModule.productDetails;
    this.props.cartModule.addToCart({
      product: id,
      quantity: this.state.quantity,
      size: this.state.size
    });
  }

  componentDidMount() {
    this.props.productModule.getProduct(this.props.match.params.id);
  }
  render() {
    const { productDetails } = this.props.productModule;
    const isDisabled = !this.state.size;
    if (!productDetails) {
      return <p>Loading</p>
    } else {
      return (
        <div className="product-detail page">
          <div className="product-detail-head row">
            <div className="preview col-md-6">
              <div className="current-image">
                <img src={productDetails.images[0]} alt="" />
              </div>
            </div>
            <div className="info col-md-6">
              <div className="name">{productDetails.name}</div>
              <div className="brand">{productDetails.brand.name}</div>
              <div className="price">${productDetails.price}</div>
              <div className="add-to-bag">
                <div className="size-quantity">
                  <div className="field size-field">
                    <label htmlFor="size">Size:</label>
                    <select name="size" className="size" value={this.state.size} placeholder="Choose size" onChange={this.handleSizeChange}>
                      {this.renderSizes()}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="quantity">Quantity:</label>
                    <NumberInput mobile name="quantity" min={1} max={10} value={this.state.quantity} onChange={this.handleQuantityChange} />
                  </div>
                </div>
                {this.props.userModule.isAuthenticated
                  ?
                  <Button className="add-button" onClick={this.addToCart} disabled={isDisabled}>Add to bag</Button>
                  :
                  <p>Please <Link to="/register">register</Link> or <Link to="/login">login</Link> to start shopping.</p>}

              </div>
            </div>
          </div>
        </div >
      )
    }
  }
}

export default connectStore({
  productModule,
  cartModule,
  userModule
})(ProductDetail);