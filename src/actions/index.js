import axios from 'axios'
import * as ACTION from '../constants'
import { postToBooks } from "../APIs/book";

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
    console.log('logging out')
    return ({
        type: ACTION.LOGOUT_SUCCESS,
        payload: {
            status: 'success'
        }
    })
}

export const beginAddBook = (book = {}) => {
    return dispatch => {
      return postToBooks(book).then(({ data }) => dispatch(addBook(data)));
    };
  };

export const addBook = (data) => {
    return ({
        type: ACTION.ADD_BOOK,
        
            data: data
        
    })
}

export const deleteBook = (id) => {
    return ({
        type: ACTION.DELETE_BOOK,
        
            id: id
        
    })
}

export const editBook = (id,shelfStatus) => {
    return ({
        type: ACTION.EDIT_BOOK,
       
            id,
            shelfStatus
        
    })
}




