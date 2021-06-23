import React from 'react';

import {FormItem} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormItem>
      <input onChange={handleChange} {...otherProps} />
      {label && (
        <label className={`${otherProps.value?.length ? 'shrink' : ''}`}>
          {label}
        </label>
      )}
    </FormItem>
  );
};

export default FormInput;
