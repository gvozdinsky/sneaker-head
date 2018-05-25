import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("user")
@observer
class Register extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.user.register(this.state);
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
        Registration
        <form onSubmit={this.handleSubmit} method="post">
          <input type="text" name="username" onChange={this.handleInputChange} placeholder="Username" />
          <input type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
          <input type="submit" value="Register me" />
        </form>
      </div>
    );
  }
}

export default Register;