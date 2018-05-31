import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { push } from 'react-router-redux'
import api from 'api';
import { module as cartModule } from 'store/cart';
import { module as userModule } from 'store/user';
import { module as uiModule } from 'store/ui';

export default createSagas({

  LOGIN_REQUEST: function* ({ credentials }) {
    try {
      yield put(uiModule.actions.setButtonState('LOGIN', 'loading'))
      const res = yield call(api.auth.login, credentials);
      const { user, cart } = res.data;

      yield put(userModule.actions.setUser(user));
      yield put(cartModule.actions.setCart(cart));
      yield put(uiModule.actions.setButtonState('LOGIN', 'success'))
      yield put(push('/'))
    }
    catch (err) {
      console.log(err)
      yield put(uiModule.actions.setButtonState('LOGIN', 'error'))
    }
    yield delay(300);
    yield put(uiModule.actions.setButtonState('LOGIN', ''))
  },

  USER_REQUEST: function* () {
    try {
      const res = yield call(api.user.getCurrent);
      const { user, cart } = res.data;

      if (user) {
        yield put(userModule.actions.setUser(user));
      }
      if (cart) {
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
      yield put(uiModule.actions.setButtonState('REGISTER', 'loading'))
      yield call(api.auth.register, credentials);
      yield put(uiModule.actions.setButtonState('REGISTER', 'success'))
      yield put(userModule.actions.getUser());
      yield put(push('/'));
    }
    catch (err) {
      console.log('err', err)
      yield put(uiModule.actions.setButtonState('REGISTER', 'error'))
    }
    yield delay(300);
    yield put(uiModule.actions.setButtonState('REGISTER', ''))
  },

})
