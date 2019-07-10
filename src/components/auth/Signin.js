import React, { Component } from 'react'

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
    console.log(this.state);
  }
  render() {
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
        </form>
      </div>
    )
  }
}

export default Signin;
