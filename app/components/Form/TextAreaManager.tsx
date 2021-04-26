//Dependency Libraries
import * as React from 'react';

//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const { StyledForm: {
  InputModule,
  InputLabel,
  TextArea,
} } = StyledComponents

//Types
import { InputManagerPropTypes } from '../../types';

export default ({ label, name, value, onChange }: InputManagerPropTypes) => {

  const textAreaInputProps = {
    name,
    value,
    onChange: onChange
  }

  return (
    <InputModule>
      <InputLabel>{ label }</InputLabel>
      <TextArea { ...textAreaInputProps }/>
    </InputModule>
  )
};