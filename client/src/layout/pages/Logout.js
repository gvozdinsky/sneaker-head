import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("auth", "router")
@observer
class Logout extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.auth.login(this.state);
    console.log('eee', this.state)
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="page register">
        Login
        <form onSubmit={this.handleSubmit} method="post">
          <input type="text" name="username" onChange={this.handleInputChange} placeholder="Username" />
          <input type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
          <input type="submit" value="Login me" />
        </form>
      </div>
    );
  }
}

export default Logout;