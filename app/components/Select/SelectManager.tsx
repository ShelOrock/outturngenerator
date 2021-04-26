import * as React from 'react';

import * as StyledComponents from '../styledcomponents/index';
const { StyledForm: { InputModule, InputLabel, Select, Option } } = StyledComponents;

import { SelectPropTypes } from '../../types';

export default ({ label, selectValue, onChange, width, disabled, options }: SelectPropTypes) => {
  
  const selectProps = {
    value: selectValue,
    onChange,
    flavourProfile: selectValue,
    width,
    disabled
  }

  const renderOptions = (): JSX.Element[] => (
    options.map((option, idx) => (
      <Option
        key={ idx }
        value={ option.value }
      >{ option.name }</Option>
    ))
  )

  return (
  <InputModule>
    { label && <InputLabel>{ label }</InputLabel> }
    <Select { ...selectProps } >
      { renderOptions() }
    </Select>
  </InputModule>
  )
};