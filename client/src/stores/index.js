import routerStore from 'stores/router';
import ProductStore from 'stores/products'
import UserStore from 'stores/user'

class Store {
  constructor() {
    this.router = routerStore
    this.products = new ProductStore()
    this.user = new UserStore()
  }
}

const store = new Store();

window.store = store;

export default store;