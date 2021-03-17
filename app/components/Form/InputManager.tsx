import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const {
  StyledForm: {
    InputModule,
    InputLabel,
    InputField,
  }
} = StyledComponents;

export default ({ props }: any) => (
  <InputModule>
    <InputLabel>{ props.label }</InputLabel>
    <InputField
      type={ props.type }
      size={ props.size || 'default' }
      name={ props.name }
      value={ props.value }
      onChange={ props.onChangeFunction }
    />
  </InputModule>
)