import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'api';
import { module as cartModule } from 'store/cart';
import { module as userModule } from 'store/user';

export default createSagas({

  LOGIN_REQUEST: function* ({ credentials }) {
    try {
      const res = yield call(api.auth.login, credentials);
      //cart is undef, need fix from backend
      const { user, cart } = res.data;
      yield put(userModule.actions.setUser(user));
      yield put(cartModule.actions.setCart(cart));
      yield put(push('/'))
    }
    catch (err) {
      console.log(err)
    }
  },

  USER_REQUEST: function* () {
    try {
      const res = yield call(api.user.getCurrent);
      if (res.data) {
        const { user, cart } = res.data;
        //add cart items to cart store
        yield put(userModule.actions.setUser(user));
        yield put(cartModule.actions.setCart(cart));
      }
    }
    catch (err) {
      console.log('err', err)
    }
  },

  LOGOUT_REQUEST: function* () {
    try {
      yield call(api.auth.logout);
      yield put(userModule.actions.setUser(null));
      yield put(cartModule.actions.setCart([]));
      yield put(push('/'));
    }
    catch (err) {
      console.log('err', err)
    }
  },

  REGISTER_REQUEST: function* ({ credentials }) {
    try {
      yield call(api.auth.register, credentials);
      yield put(push('/'));
    }
    catch (err) {
      console.log('err', err)
    }
  },

})
