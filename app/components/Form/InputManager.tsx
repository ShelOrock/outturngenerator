//Dependency Libraries
import * as React from 'react';

//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const {
  StyledForm: {
    InputModule,
    InputLabel,
    InputField,
  }
} = StyledComponents;

//Types
import { InputManagerPropTypes, TextInputPropTypes } from '../../types/react/componentProps';

export default ({
  label = '',
  placeholder = '',
  type,
  size = 'default',
  name,
  value,
  onChange
}: InputManagerPropTypes) => {

  const inputFieldProps: TextInputPropTypes = {
    placeholder,
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