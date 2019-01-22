import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Auth from './Auth'
import Destination from './Destination'
import User from './User.js'

const AppReducer = combineReducers({
  Auth,
  Destination,
  User,
  router: routerReducer
})

export default AppReducer
