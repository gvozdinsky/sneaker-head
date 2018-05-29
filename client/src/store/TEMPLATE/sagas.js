import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'

export default createSagas({

  // REQUEST_POSTS : function* (){
  //   try{
  //     const response = yield call(postApi.getAll)
  //     yield put({
  //       type: "UPDATE_POSTS",
  //       posts : response.data
  //     })
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // },

})
