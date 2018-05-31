import React from 'react';
import ProgressButton, { STATE } from 'react-progress-button';

function Button({ primary, children, className, ...restProps }) {
  return (
    <ProgressButton controlled={true} className={`${className} ${primary ? 'primary' : ''}`} {...restProps}>
      {children}
    </ProgressButton>
  )

}

export default Button;