import * as React from 'react';
import { InputManagerPropTypes, TextInputPropTypes } from '../../types/react/componentProps';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledForm: {
    InputModule,
    InputLabel,
    InputField,
  }
} = StyledComponents;

export default ({ label, type, size, name, value, onChange }: InputManagerPropTypes) => {

  const inputFieldProps: TextInputPropTypes = {
    type,
    name,
    value,
    onChange
  }

  return (
    <InputModule>
      <InputLabel>{ label }</InputLabel>
      <InputField { ...inputFieldProps } inputSize={ size }/>
    </InputModule>
  )
}