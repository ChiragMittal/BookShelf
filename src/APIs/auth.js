import axios from 'axios'
import * as URL from './APIs_url'

export const Login = (username, password) => {
    return new Promise((resolve, reject) => {
        // axios.post(
        //     URL.LOGIN, {
        //         username: username,
        //         password: password
        //     })
        //     .then((res) => resolve(res))
        //     .catch((err) => reject(err))

        resolve({
            success: true,
            data: {
                username: username,
                token: 'abcdefghijklmn'
            }
        })
    })
}

export const Logout = () => {
    return new Promise((resolve, reject) => {
        // axios.post(
        //     URL.LOGOUT, {})
        //     .then((res) => resolve(res))
        //     .catch((err) => reject(err))

        resolve({
            success: true,
            message: 'You have been loggedout',
            data: {}
        })
    })
}