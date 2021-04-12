import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledForm: {
    InputModule,
    InputLabel,
    InputField,
  }
} = StyledComponents;

export default ({ label, type, size, name, value, handleOnChange }: any) => {
  
  const inputFieldProps = {
    type,
    size: size || 'default',
    name,
    value: value,
    onChange: handleOnChange
  }

  return (
    <InputModule>
      <InputLabel>{ label }</InputLabel>
      <InputField { ...inputFieldProps }/>
    </InputModule>
  )
}