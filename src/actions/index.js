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

// export const doLogOut = (username, token) => (dispatch) => {
//     // axios.post(
//     //     //Urls.adminUrl + 'logout',
//     //     // URL
//     //     {
//     //         token: token,
//     //         username: username
//     //     }
//     // ).then(res => {
//     //     dispatch({
//     //         type: ACTION.LOGOUT
//     //     })
//     // }).catch(err => {

//     // })

//     // Access to API
// }

//Trip Action

export const receiveProduct = (data) => ({
    type: ACTION.RECEIVE_DATA,
    payload: {
        destination: data
    }
})

// Set currently selected product variation
export const selectProduct = (index) => ({

    type: ACTION.SELECT_PRODUCT,
    payload: {
        index: index
    }
})

// Add item to cart
export const addToCart = (id, name) => ({
    type: ACTION.CART_ADD,
    payload: {
        id: id,
        name: name

    }
})

// Remove item from cart
export const removeFromCart = (idx) => ({

    type: ACTION.CART_REMOVE,
    payload: {
        idx: idx
    }
})

// Update cart visibility status
export const updateCartVisible = (cartVisible) => ({

    type: ACTION.CART_VISIBLE,
    payload: {
        cartVisible: cartVisible
    }
})

//export const  fetch = (query) => ({

//      type: ACTION.CART_FETCH,
//	payload:{
//      query: query
//  }
//}),

export const hotsearch = (query) => ({

    type: ACTION.DESTINATIONHOT_SEARCH,
    payload: {
        query: query
    }
})

export const hotsearch_fetch = (data) => ({

    type: ACTION.DESTINATIONHOT_SEARCHFETCH,
    payload: {
        suggestion: data
    }
})

export const receiveMap = (data) => ({

    type: ACTION.RECEIVEMAP_DATA,
    payload: {
        map: data
    }
})

//User Action


export const addPhoto = (data) => ({
    type: ACTION.ADD_PHOTO,
    payload: {
        img: data
    }
})

export const delPhoto = (data) => ({
    type: ACTION.DEL_PHOTO,
    payload: {
        img: data
    }
})

export const editInfo = (data) => ({
    type: ACTION.EDIT_INFO,
    payload: {
        info: data
    }
})

// export const retrieveInfo = (data) => ({
//     type: ACTION.RETRIEVE_INFO,
//     payload: {
//         info: data
//     }
// })

export const recieveInfo = (data) => ({
    type: ACTION.RECIEVE_INFO,
    payload: {
        info: data
    }
})

// export const retrievePost = (data) => ({
//     type: ACTION.RETRIEVE_POST,
//     payload: {
//         post: data
//     }
// })

export const loadPost = (data) => ({
    type: ACTION.LOAD_POST,
    payload: {
        post: data
    }
})


