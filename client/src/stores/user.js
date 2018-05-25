import { observable, action, computed } from 'mobx';
import history from '../history';
import api from 'api';

export default class User {

  constructor() {
    history.subscribe(this._handleLogoutPath);
  }

  @observable user;
  @observable isLoading = false;
  @observable cart = [];

  @computed
  get isAuthenticated() {
    return this.user.username;
  }

  @action.bound
  async addToCart(cartItem) {
    console.log('inside add to cart');
    const res = await api.user.addToCart(cartItem);
    this.cart.push(res.data);
    console.log('new cart item', res.data)
  }

  @action.bound
  async getUser() {
    this.isLoading = true;
    const res = await api.user.getCurrent();
    console.log('res.data', res.data)
    if (res.data) {
      this.user.username = res.data.user.username;
      this.cart = res.data.cart;
    }
    this.isLoading = false;
  }


  @action.bound
  async login(credentials) {
    this.isLoading = true;
    const res = await api.auth.login(credentials);
    console.log('user', res.data.user)
    this.user = res.data.user;
    this.isLoading = false;
    history.push('/');
  }

  @action.bound
  async logout() {
    this.isLoading = true;
    const res = await api.auth.logout();
    this.user = res.data.user;
    this.isLoading = false;
    history.push('/');
  }

  @action.bound
  async register(credentials) {
    this.isLoading = true;
    await api.auth.register(credentials);
  }

  //when location = /logout dispatch logout action
  _handleLogoutPath = async (location, action) => {
    if (location.pathname === '/logout') {
      await this.logout();
    }
  }

}
