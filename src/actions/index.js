import axios from 'axios'
import * as ACTION from '../constants'
import { postToBooks ,deleteFromBook ,getFromBooks} from "../APIs/book";
import {addUser , loginUser} from "../APIs/auth"

export const loginUserData = userData => ({
    type: ACTION.LOGIN,
    userData
  });

  export const beginLogin = userData => dispatch =>{
    return loginUser(userData).then(({data}) => dispatch(loginUserData(data)))
}    

export const logout = () => ({
    type: ACTION.LOGOUT,
  });

  

export const registerUser = userData => ({
    type: ACTION.REGISTER,
    userData
  });
  
export const beginRegister = userData => dispatch =>{
    return addUser(userData).then(({data}) => dispatch(registerUser(data)))
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

export function beginDeleteBook (book) {
    return dispatch => {
      return deleteFromBook(book).then(({ data }) =>
        dispatch(deleteBook(data))
      );
    };
  };

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

export const beginGetBooks = () => {
    return dispatch => {
      return getFromBooks().then(({ data }) => dispatch(getBooks(data)));
    };
  };
  
  const getBooks = books => ({
    type: "SET_BOOKS",
    books
  });




