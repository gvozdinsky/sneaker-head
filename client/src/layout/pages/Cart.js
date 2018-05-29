import React, { Component } from 'react';
import NumberInput from 'layout/components/NumberInput';
import Button from 'layout/components/Button';
import { Link } from "react-router-dom";
import { connectStore } from 'redux-box';
import { module as cartModule } from 'store/cart';


class Cart extends Component {
  removeItem(id) {
    this.props.cartModule.deleteCartItem(id);
  }

  checkout = () => {
    alert('This is demo :)')
  }

  renderCartItems = () => {
    return this.props.cartModule.cart.map(item => {
      const product = item.product;
      return (
        <tr className="cart-table-item" key={item._id}>
          <td className="cart-table-item-image"><img src={product.images[0]} alt="" /></td>
          <td className="cart-table-item-size"><Link to={`/product/${product.id}`}>{product.name}</Link></td>
          <td className="cart-table-item-size">{item.size}</td>
          <td className="cart-table-item-quantity">{item.quantity}</td>
          <td className="cart-table-item-amount">${item.quantity * product.price}</td>
          <td className="cart-table-item-delete" onClick={this.removeItem.bind(this, item._id)}>X</td>
        </tr>
      )
    });
  }

  render() {
    const checkoutSum = parseFloat(this.props.cartModule.checkoutSum).toFixed(2);
    return (
      <div className="page cart">
        <table className="cart-table">
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th>Size</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Del</th>
            </tr>
            {this.renderCartItems()}
          </tbody>
        </table>
        <p className="total-sum">Total sum: <span>${checkoutSum}</span><Button className="checkout-btn" onClick={this.checkout}>Checkout</Button> </p>
      </div>
    )
  }
}

export default connectStore({
  cartModule
})(Cart);