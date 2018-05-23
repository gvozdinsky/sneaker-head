import React, { Component } from 'react';
import SizesFilter from '../components/SizesFilter';
import BrandsFilter from '../components/BrandsFilter';
import { Link } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import { ClipLoader as Spinner } from 'react-spinners';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


@inject("products")
@observer
class Products extends Component {

  renderProducts = () => {
    const { filteredProducts: products } = this.props.products;
    return products.map(product => {
      return (
        <div className="product col-lg-4 col-md-6 col-xs-12" key={product.id}>
          <img src={product.images[0]} alt="" className="photo" />
          <div className="name">{product.name}</div>
          <div className="brand">{product.brand.name}</div>
          <p className="price">{product.price}$</p>
          <Link className="product-link" to={`/product/${product.id}`}></Link>
        </div>
      )
    })
  }

  componentDidMount() {
    this.props.products.getProducts();
  }

  render() {
    const { filteredProducts: products, isLoading } = this.props.products;
    return (
      <div className="page products row">
        <div className="filters col-md-2 col-xs-12">
          <BrandsFilter />
          <SizesFilter />
        </div>

        <div className="catalog col-md-10 col-xs-12">
          <div className="title">{`${products.length} results`}</div>

          <div className="spinner">
            <Spinner name="line-scale-pulse-out" color="#606060" loading={isLoading} size={80} />
          </div>

          <ReactCSSTransitionGroup
            className="products row"
            transitionName="fade-animation"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            component="div"
          >
            {isLoading
              ? null
              : this.renderProducts()}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Products;