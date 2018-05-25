import React, { Component } from 'react';

class NumberInput extends Component {
  state = {
    value: this.props.minValue,
  }

  increment = () => {
    const value = this.state.value + 1;
    this._setValue(value);
  }

  decrement = () => {
    const value = this.state.value - 1;
    this._setValue(value);
  }

  _setValue(value) {
    const { minValue, maxValue } = this.props;
    if (value >= minValue && value <= maxValue) {
      this.setState((prevState, props) => {
        return { value }
      })
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    this._setValue(value);
  }

  render() {
    return (
      <div className="number-input">
        <div className="number-input-btn minus" onClick={this.decrement}></div>
        <input type="text" className="number-input-input" onChange={this.handleChange} value={this.state.value} />
        <div className="number-input-btn plus" onClick={this.increment}></div>
      </div>

    );
  }
}

NumberInput.defaultProps = {
  minValue: 1,
  maxValue: 10
}

export default NumberInput;