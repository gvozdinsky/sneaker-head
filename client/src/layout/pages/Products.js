import React, { Component } from 'react';
import SizesFilter from '../components/SizesFilter';
import BrandsFilter from '../components/BrandsFilter';
import { Link } from "react-router-dom";
import { ClipLoader as Spinner } from 'react-spinners';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connectStore } from 'redux-box';
import { module as productModule } from 'store/product';



class Products extends Component {

  renderProducts = () => {
    const { productModule } = this.props;
    return productModule.filteredProducts.map(product => {
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
    this.props.productModule.getProducts();
  }

  render() {
    const { productModule } = this.props;
    return (
      <div className="page products row">
        <div className="filters col-md-2 col-xs-12">
          <BrandsFilter brands={productModule.brands} filter={productModule.filters.brand} toggleFilter={productModule.toggleFilter} resetFilter={productModule.resetFilter} />
          <SizesFilter sizes={productModule.sizes} filter={productModule.filters.size} toggleFilter={productModule.toggleFilter} resetFilter={productModule.resetFilter} />
        </div>

        <div className="catalog col-md-10 col-xs-12">
          <div className="title">{`${productModule.filteredProducts.length} results`}</div>

          <div className="spinner">
            <Spinner name="line-scale-pulse-out" color="#606060" loading={productModule.isLoading} size={80} />
          </div>

          <ReactCSSTransitionGroup
            className="products row"
            transitionName="fade-animation"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            component="div"
          >
            {productModule.isLoading
              ? null
              : this.renderProducts()}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default connectStore({
  productModule
})(Products);