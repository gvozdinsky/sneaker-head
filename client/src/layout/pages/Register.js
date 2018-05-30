import React, { Component } from 'react';
import { module as userModule } from 'store/user';
import { connectStore } from 'redux-box';
import TextInput from 'layout/components/inputs/TextInput';
import Button from 'layout/components/Button';


class Register extends Component {

  state = {
    username: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userModule.register(this.state);
  }

  handleInputChange = (event, data) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log('data', data)
    this.setState({
      [name]: value
    });
  }

  render() {
    const isDisabled = !(this.state.username && this.state.password);
    return (
      <div className="page register">
        <form onSubmit={this.handleSubmit} method="post">
          <h2>Registration</h2>
          <TextInput type="text" name="username" onChange={this.handleInputChange} placeholder="Username" />
          <TextInput type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
          <Button type="submit" disabled={isDisabled}>Register</Button>
        </form>
      </div>
    );
  }
}

export default connectStore({
  userModule
})(Register);