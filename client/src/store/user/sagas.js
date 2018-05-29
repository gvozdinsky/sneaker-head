import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'api';

export default createSagas({

  LOGIN_REQUEST: function* ({ credentials }) {

    try {
      const res = yield call(api.auth.login, credentials);
      //cart is undef, need fix from backend
      const { user, cart } = res.data;
      //add cart items to cart store
      yield put({
        type: "SET_USER",
        user: user.user,
      })
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
        yield put({
          type: "SET_USER",
          user: user
        })
      }
    }
    catch (err) {
      console.log('err', err)
    }
  },

  LOGOUT_REQUEST: function* () {
    try {
      const res = yield call(api.auth.logout);
      yield put({
        type: "SET_USER",
        user: null,
        cart: []
      })
    }
    catch (err) {
      console.log('err', err)
    }
  },

  REGISTER_REQUEST: function* ({ credentials }) {
    try {
      const res = yield call(api.auth.register, credentials);
      yield put(push('/'));
    }
    catch (err) {
      console.log('err', err)
    }
  },

})
