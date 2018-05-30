import React from 'react';
import NumericInput from 'react-numeric-input';

export default (props) => {
  return <NumericInput {...props} style={{
    wrap: {
      borderRadius: '1px',
      fontSize: 14,
      height: '33px'
    },
    input: {
      // color: '',
      height: '100%',
      border: '1px solid #ccc',
      display: 'block',
      fontWeight: 100,
    },
    'input:focus': {
      border: '1px inset #69C',
      outline: 'none'
    },

    btn: {
      background: '#222222',
      color: '#fff',
      padding: '0 14px'
    },
    'btn:hover': {
      background: '#353535',
    },
    'btn:active': {
      background: '#353535',
    },

    minus: {
      background: '#fff',
    },
    plus: {
      backgroundColor: '#fff',
    }
  }} />
}