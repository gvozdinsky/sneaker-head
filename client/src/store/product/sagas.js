import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'
import api from 'api';
import { module as productModule } from 'store/product';

export default createSagas({

  REQUEST_PRODUCTS: function* () {
    try {
      const res = yield call(api.products.getAll)
      yield put(productModule.actions.setProducts(res.data))
    }
    catch (err) {
      console.log(err)
    }
  },

  REQUEST_PRODUCT: function* ({ id }) {
    try {
      const res = yield call(api.products.getOne, id)
      yield put(productModule.actions.setProductDetails(res.data))
    }
    catch (err) {
      console.log(err)
    }
  },

})
