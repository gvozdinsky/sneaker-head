import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from 'store';
import App from "layout/layout/App";
import registerServiceWorker from "./registerServiceWorker";
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { Scrollbars } from 'react-custom-scrollbars';


import './layout/assets/css/styles.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>

      <App />

    </ConnectedRouter>
  </Provider>,
  document.getElementById("shopper")
);
registerServiceWorker();