import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'
import api from 'api';
import { module as cartModule } from 'store/cart';
import { module as uiModule } from 'store/ui';

export default createSagas({

  ADD_CART_ITEM_REQUEST: function* ({ id }) {
    try {
      yield put(uiModule.actions.setButtonState('ADD_TO_CART', 'loading'))
      const res = yield call(api.cart.addToCart, id)
      yield put(cartModule.actions.addItem(res.data))
      yield put(uiModule.actions.setButtonState('ADD_TO_CART', 'success'))
    }
    catch (err) {
      console.log(err)
      yield put(uiModule.actions.setButtonState('ADD_TO_CART', 'error'))
    }
  },
  DELETE_CART_ITEM_REQUEST: function* ({ id }) {
    try {
      const res = yield call(api.cart.deleteCartItem, id)
      yield put(cartModule.actions.removeItem(id));
    }
    catch (err) {
      console.log(err)
    }
  },

})
