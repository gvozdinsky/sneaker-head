import React, { Component } from 'react';


class Checkbox extends Component {
  state = {
    checked: false
  }

  toggle = () => {
    this.setState((prevState, props) => {
      return { checked: !prevState.checked }
    })
  }
  render() {
    return (
      <span className="custom-checkbox" onClick={this.toggle} >
        <input type="checkbox" className="checkbox" checked={this.state.checked} />
        <span></span>
      </span>
    );
  }
}

export default Checkbox;