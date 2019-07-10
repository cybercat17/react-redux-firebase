import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/authActions';

class Signin extends Component {
  state = {
    email : '',
    password : ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    const authRes = authError ? (<p>Auth Error</p>) : (null);
    if(auth.uid) {
      return <Redirect to="/" />
    }
    return (
      <div className="container section">
        <form onSubmit={ this.handleSubmit } className="white">
          <h5 className="grey-text text-darken-3 center">Sign In</h5>
          <div className="input-field">
            <label>Email</label>
            <input type="text" id="email" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" id="password" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <button className="btn orange">Login</button>
          </div>
          <div className="red-text center">
            { authRes }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError : state.auth.authError,
    auth : state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn : (creds) => {
      dispatch(signIn(creds))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
