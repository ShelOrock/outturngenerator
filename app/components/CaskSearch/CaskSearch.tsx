import * as React from 'react';
const { useState } = React;

import * as StyledComponents from '../styledcomponents/index';
const { 
  StyledForm: {
    InputModule,
    InputLabel,
    InputField,
  }
} = StyledComponents;

import { CaskFormPropTypes, InputOnChangeType } from '../../types/index';

export default () => {

  const [ searchInput, setSearchInput ] = useState('');

  const handleOnChange: InputOnChangeType = e => setSearchInput(e.target.value);

  const inputFieldProps = {
    type: 'text',
    name: 'caskSearch',
    value: searchInput,
    onChange: handleOnChange,
  }

  return (
    <InputModule>
      <InputLabel>Search</InputLabel>
      <InputField { ...inputFieldProps } inputSize='small' />
    </InputModule>
  )
}