import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledForm: {
    InputModule,
    InputLabel,
    InputField,
  }
} = StyledComponents;

export default ({ label, type, size, name, value, handleOnChange }: any) => (
  <InputModule>
    <InputLabel>{ label }</InputLabel>
    <InputField
      type={ type }
      size={ size || 'default' }
      name={ name }
      value={ value }
      onChange={ handleOnChange }
    />
  </InputModule>
)