import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'
import api from 'api';

export default createSagas({

  ADD_CART_ITEM_REQUEST: function* ({ id }) {
    try {
      const response = yield call(api.cart.addToCart, id)
      yield put({
        type: "ADD_CART_ITEM",
        new_item: response.data
      })
    }
    catch (err) {
      console.log(err)
    }
  },

})
