import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'
import api from 'api';
import { module as cartModule } from 'store/cart';

export default createSagas({

  ADD_CART_ITEM_REQUEST: function* ({ id }) {
    try {
      const res = yield call(api.cart.addToCart, id)
      yield put(cartModule.actions.addItem(res.data))
    }
    catch (err) {
      console.log(err)
    }
  },

})
