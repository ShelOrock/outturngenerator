import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const { StyledForm: { Select, Option } } = StyledComponents;

export default ({ selectValue, onChangeFunction, options }) => (
  <Select value={ selectValue } onChange={ onChangeFunction } flavourProfile={ selectValue }>
    { options.map((option, idx) => <Option key={ idx } value={ option.value }>{ option.name }</Option> ) }
  </Select>
);