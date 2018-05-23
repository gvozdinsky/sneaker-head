import routerStore from 'stores/router';
import ProductStore from 'stores/products'
import AuthStore from 'stores/auth'

class Store {
  constructor() {
    this.router = routerStore
    this.products = new ProductStore()
    this.auth = new AuthStore()
  }
}

const store = new Store();

window.store = store;

export default store;