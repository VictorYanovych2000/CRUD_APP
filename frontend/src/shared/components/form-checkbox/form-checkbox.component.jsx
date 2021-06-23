import React from 'react';

import {FormItem} from './form-checkbox.styles';

const FormCheckbox = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormItem>
      {label && <label htmlFor={otherProps.name}>{label}</label>}
      <input type={'checkbox'} onChange={handleChange} {...otherProps} />
    </FormItem>
  );
};

export default FormCheckbox;
