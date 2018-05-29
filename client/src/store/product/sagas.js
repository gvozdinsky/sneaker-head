import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'
import api from 'api';

export default createSagas({

  REQUEST_PRODUCTS: function* () {
    try {
      const res = yield call(api.products.getAll)
      yield put({
        type: "SET_PRODUCTS",
        products: res.data
      })
    }
    catch (err) {
      console.log(err)
    }
  },

  REQUEST_PRODUCT: function* ({ id }) {
    try {
      const res = yield call(api.products.getOne, id)
      yield put({
        type: "SET_PRODUCT_DETAILS",
        product: res.data
      })
    }
    catch (err) {
      console.log(err)
    }
  },

})
