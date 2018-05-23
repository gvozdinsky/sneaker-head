import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import store from 'stores';
import App from "layout/layout/App";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from 'react-router';
import history from './history';
import { Scrollbars } from 'react-custom-scrollbars';

import './layout/assets/css/styles.css';


ReactDOM.render(
  <Provider {...store}>
    <Router history={history}>
      <Scrollbars autoHeight autoHeightMin="100vh">
        <App />
      </Scrollbars>
    </Router>
  </Provider>,
  document.getElementById("shopper")
);
registerServiceWorker();