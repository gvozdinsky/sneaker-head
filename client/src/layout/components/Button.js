import React from 'react';

function Button({ primary, children, className, ...restProps }) {
  console.log('restProps', restProps)
  return (
    <button className={`button ${className} ${primary ? 'primary' : ''}`} {...restProps}>
      {children}
    </button>
  )

}

export default Button;