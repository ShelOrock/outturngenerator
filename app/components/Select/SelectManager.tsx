import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const { StyledForm: { InputModule, InputLabel, Select, Option } } = StyledComponents;

export default ({ label, selectValue, onChangeFunction, width, options }) => {
  
  const selectProps = {
    value: selectValue,
    onChange: onChangeFunction,
    flavourProfile: selectValue,
    width
  }

  const renderOptions = () => (
    options.map((option, idx) => (
      <Option key={ idx } value={ option.value }>{ option.name }</Option>
    ))
  )

  return (
  <InputModule>
    <InputLabel>{ label }</InputLabel>
    <Select { ...selectProps } >
      { renderOptions() }
    </Select>
  </InputModule>
  )
};