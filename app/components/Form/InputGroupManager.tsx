//Dependency Libraries
import * as React from "react";

//Components
import InputManager from "../Form/InputManager";
//Styled Components
import * as StyledComponents from "../styledcomponents/index";
const { StyledDiv: { Row } } = StyledComponents;

export default ({ inputProps, onChange }) => {

  const renderInputManagers = (): JSX.Element[] => {
    return inputProps.map((input, idx) => {
      return <InputManager
        key={ idx }
        { ...input }
        onChange={ onChange }
      /> 
    })
  }

  return (
    <Row>
      { renderInputManagers() }
    </Row>
  );
};
