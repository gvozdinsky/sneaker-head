import React from 'react';

export default ({ type, ...rest }) => {
  return (
    <div className="field">
      <input type={type} {...rest} />
    </div>
  )
}