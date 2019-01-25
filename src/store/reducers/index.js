import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Auth from './Auth'


const AppReducer = combineReducers({
  Auth,
  
  router: routerReducer
})

export default AppReducer
