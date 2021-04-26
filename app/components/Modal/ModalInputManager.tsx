//Dependency Libraries
import * as React from 'react';

//Components
import InputManager from '../Form/InputManager';
//Styled Components
import * as StyledComponents from '../styledcomponents/index';
const { StyledDiv: { Column } } = StyledComponents;

export default ({ inputPropsGenerator, onChange }) => {

  const renderInputManagers = (): JSX.Element => inputPropsGenerator.map((input, idx) => (
    <InputManager
      key={ idx }
      { ...input }
      onChange={ onChange }
    />
  ))

  return (
    <Column>
      { renderInputManagers() }
    </Column>
  )
}