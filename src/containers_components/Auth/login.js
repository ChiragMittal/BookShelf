import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { beginLogin } from "../../actions/index";
import classnames from "classnames";
import { beginGetBooks } from "../../actions/index";
import {loginUser} from "../../APIs/auth"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit =async e => {
    e.preventDefault();
    try{
        const userData = {
            email: this.state.email,
            password: this.state.password
          };
          
          const response = await loginUser(userData);
          
          this.props.beginLogin(response.data);
          this.props.beginGetBooks();
          const token = window.localStorage.getItem("token");
    console.log(token)
          this.props.history.push("/search");
          
          //console.log(this.props.beginGetBooks())
          
    }catch (e) {
        this.setState({
          error: "Cannot login. Please recheck your credentials."
        });
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h1 className="title"> Login</h1>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit.bind(this)} className="login">
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
    beginLogin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
    beginLogin: userData => dispatch(beginLogin(userData)),
    beginGetBooks: () => dispatch(beginGetBooks())
  });
export default connect(mapStateToProps,mapDispatchToProps)(Login);