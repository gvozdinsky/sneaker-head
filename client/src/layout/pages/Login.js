import React, { Component } from 'react';
import { module as userModule } from 'store/user';
import { connectStore } from 'redux-box';
import TextInput from 'layout/components/inputs/TextInput';
import Button from 'layout/components/Button';



class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userModule.login(this.state);
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
    const isDisabled = !(this.state.username && this.state.password);
    return (
      <div className="page login">

        <form onSubmit={this.handleSubmit} method="post">
          <h2>Login</h2>
          <TextInput type="text" name="username" onChange={this.handleInputChange} placeholder="Username" />
          <TextInput type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
          <Button type="submit" disabled={isDisabled}>Login me</Button>
        </form>
      </div>
    );
  }
}

export default connectStore({
  userModule
})(Login);