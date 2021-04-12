import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const { StyledForm: {
  InputModule,
  InputLabel,
  TextArea,
} } = StyledComponents

export default ({ label, name, value, handleOnChange }: any) => {
  const textAreaInputProps = {
    name,
    value,
    onChange: handleOnChange
  }
  return (
    <InputModule>
      <InputLabel>{ label }</InputLabel>
      <TextArea { ...textAreaInputProps }/>
    </InputModule>
  )
};