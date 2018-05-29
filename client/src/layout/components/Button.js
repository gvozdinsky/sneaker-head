import React from 'react';

function Button({ primary, children, className, restProps }) {
  return (
    <button className={`button ${className} ${primary ? 'primary' : ''}`} {...restProps}>
      {children}
    </button>
  )

}

export default Button;