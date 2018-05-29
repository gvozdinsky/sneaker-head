import React, { Component } from 'react';
import NumberInput from 'layout/components/NumberInput';
import Button from 'layout/components/Button';
import { Link } from "react-router-dom";
import { connectStore } from 'redux-box';
import { module as cartModule } from 'store/cart';


class Cart extends Component {
  renderCartItems = () => {
    console.log('cart', this.props.cartModule.cart)
    return this.props.cartModule.cart.map(item => {
      const product = item.product;
      return (
        <tr className="cart-table-item" key={item._id}>
          <td className="cart-table-item-image"><img src={product.images[0]} alt="" /></td>
          <td className="cart-table-item-size"><Link to={`/product/${product.id}`}>{product.name}</Link></td>
          <td className="cart-table-item-size">{item.size}</td>
          <td className="cart-table-item-quantity">{item.quantity}</td>
          <td className="cart-table-item-amount">${item.quantity * product.price}</td>
          <td className="cart-table-item-delete">X</td>
        </tr>
      )
    });
  }
  render() {
    const checkoutSum = parseFloat(this.props.cartModule.checkoutSum).toFixed(2);;
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
        <p className="total-sum">Total sum: <span>${checkoutSum}</span></p>
      </div>
    )
  }
}

export default connectStore({
  cartModule
})(Cart);