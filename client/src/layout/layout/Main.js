import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import Brands from "../pages/Brands";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";


class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="wrapper">
          {/* <Breadcumbs items={[{ text: "Home" }, { text: "Men" }]} /> */}
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/brands" component={Brands} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default Main;