import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class Signup extends Component {
  state = {
    email : '',
    password : '',
    firstname : '',
    lastname : ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if(auth.uid) {
      return <Redirect to="/" />
    }
    return (
      <div className="container section">
        <form onSubmit={ this.handleSubmit } className="white">
          <h5 className="grey-text text-darken-3 center">Sign Up</h5>
          <div className="input-field">
            <label>Email</label>
            <input type="text" id="email" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" id="password" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input type="text" id="lastname" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label>First Name</label>
            <input type="text" id="firstname" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <button className="btn orange">Signup</button>
          </div>
          <div className="red-text container center">
            { authError ? <p>{ authError }</p> : null }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth,
    authError : state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp : (newUser) => {
      dispatch(signUp(newUser))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
