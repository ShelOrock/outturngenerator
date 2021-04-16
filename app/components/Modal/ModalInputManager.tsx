import * as React from 'react';

import InputManager from '../Form/InputManager';
import * as StyledComponents from '../styledcomponents/index';
const { StyledDiv: { Column } } = StyledComponents;

export default ({ inputPropsGenerator, handleOnChange }) => {

  const renderInputManagers = () => inputPropsGenerator.map((input, idx) => (
    <InputManager key={ idx } { ...input } handleOnChange={ handleOnChange } />
  ))

  return (
    <Column>
      { renderInputManagers() }
    </Column>
  )
}