import axios from 'axios'
import * as ACTION from '../constants'

export const attemptLogin = (username, password) => ({
    type: ACTION.LOGIN_ATTEMPT,
    payload: {
        username: username,
        password: password
    }
})

// export const loginSuccess = (username, token, loggedAt) => ({
//     type: ACTION.LOGIN_SUCCESS,
//     payload: {
//         status: 'success',
//         username: username,
//         token: token,
//         loggedAt: loggedAt
//     }
// })

export const loginSuccess = (data) => {
    console.log('logging in')
    return ({
        type: ACTION.LOGIN_SUCCESS,
        payload: {
            status: 'success',
            username: data.username,
            token: data.token
        }
    })
}

export const loginFailed = () => ({
    type: ACTION.LOGIN_FAILED,

})

export const logoutSuccess = (data) => {
    console.log('logging in')
    return ({
        type: ACTION.LOGOUT_SUCCESS,
        payload: {
            status: 'success'
        }
    })
}


// export const hotsearch = (query) => ({

//     type: ACTION.BOOK_SEARCH,
//     payload: {
//         query: query
//     }
// })

// export const hotsearch_fetch = (data) => ({

//     type: ACTION.BOOK_SEARCHFETCH,
//     payload: {
//         suggestion: data
//     }
// })



