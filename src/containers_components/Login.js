import React, { Component } from 'react'
import * as AUTH from '../utils/auth'
import * as AUTH_API from '../APIs/auth'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPassword: false
        }
    }

    componentWillMount() {
        // checking if the user has been logged in and is still valid
        if (AUTH.isLoggedIn(this.props.Auth))
            return this.props.history.push('/')
        // else
        //  // stay
    }

    handleSubmit(e) {
        e.preventDefault()
        // run loading handler

        let username = this.refs.username.value
        let password = this.refs.password.value
        let _this = this

        AUTH_API.Login(username, password)
            .then((res) => {
                let { data } = res
                if (res.success) {
                    // console.log('login success')
                    // console.log(JSON.stringify(res))
                    _this.props.loginSuccess(data)
                    _this.props.history.push('/')
                }
                else {
                    throw new Error(data.message)
                }
            })
            .catch((err) => {
                _this.state.errorLogin = true
                _this.state.errorMsg = err
            })
            .finally(() => {
                // hiding loading
            })
    }

    handleShowPassword(e) {
        e.preventDefault()
        //this.state.showPassword = !this.state.showPassword
        this.setState(Object.assign(this.state, {
            showPassword: !this.state.showPassword
        }))
        console.log(this.state.showPassword)
        if (this.state.showPassword) {

        }
        else {

        }
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.handleSubmit.bind(this)} className='form'>
                    <div>
                        <label>Username</label>
                        <input type="text" ref='username' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type={this.state.showPassword ? 'text' : 'password'} ref='password' />
                        <button type='button' onClick={this.handleShowPassword.bind(this)}>{this.state.showPassword ? 'Hide' : 'Show'} Password</button>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    }
}