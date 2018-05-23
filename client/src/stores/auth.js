import { observable, action, computed } from 'mobx';
import history from '../history';
import api from 'api';

export default class Auth {

  constructor() {
    history.subscribe(this._handleLogoutPath);
  }

  @observable user = null;
  @observable isLoading = false;

  @computed
  get isAuthenticated() {
    return this.user !== null
  }


  @action.bound
  async getUser() {
    this.isLoading = true;
    const res = await api.user.getCurrent();
    this.user = res.data.user;
    this.isLoading = false;
  }


  @action.bound
  async login(credentials) {
    this.isLoading = true;
    const res = await api.auth.login(credentials);
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
    const res = await api.auth.register(credentials);
  }

  //when location = /logout dispatch logout action
  _handleLogoutPath = async (location, action) => {
    if (location.pathname === '/logout') {
      await this.logout();
    }
  }

}
