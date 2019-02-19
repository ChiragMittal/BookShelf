import * as ACTION from '../../constants'

export default function Auth(state = [], action) {
  switch (action.type) {
    case ACTION.REGISTER:
      return action.user;
    // case "LOGOUT":
    //   return {};
    default:
      return state;
  }
}
