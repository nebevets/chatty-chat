import React from 'react';

export default ({input, label, meta: {error, touched}, type}) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type || 'text'} />
    <p className="formError">{touched && error}</p>
  </div>
);
