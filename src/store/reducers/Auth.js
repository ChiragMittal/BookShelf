import moment from 'moment'
import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS } from '../../constants'

const initialState = {
  username: null,
  token: null,
  loggedAt: null
}

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return Object.assign({}, state, {
        username: action.payload.username,
        password: action.payload.password
      })

    case LOGIN_SUCCESS:
      console.log('login success')
      return Object.assign({}, state, {
        username: action.payload.username,
        token: action.payload.token,
        loggedAt: new moment(),
        redirectUrl: action.payload.redirectUrl
      })

    case LOGIN_FAILED:

    case LOGOUT_SUCCESS:
      console.log('logout success')
      return Object.assign({}, state, {
        username: null,
        token: null,
        loggedAt: null
      })

    default:
      return state
  }
}
