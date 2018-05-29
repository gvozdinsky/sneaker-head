import { createContainer } from 'redux-box'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import sagas from './sagas'
import selectors from './selectors'

export const module = {
  name: 'user',
  state,
  actions,
  mutations,
  sagas,
  selectors
}

//OPTIONAL: if you want to access this store using render props:
export default createContainer(module)