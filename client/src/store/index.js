import { createStore } from 'redux-box'
import { module as productModule } from './product'
import { module as cartModule } from './cart'
import { module as userModule } from './user'
import { module as uiModule } from './ui'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import history from '../history';

export default createStore([
  productModule,
  userModule,
  cartModule,
  uiModule
], {
    reducers: {
      routing: routerReducer
    },
    middlewares: [
      routerMiddleware(history)
    ]


  })