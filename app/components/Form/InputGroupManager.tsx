import * as React from "react";

import InputManager from "../Form/InputManager";
import * as StyledComponents from "../styledcomponents/index";
const { StyledDiv: { Row } } = StyledComponents;

export default ({ inputProps, handleOnChange }) => {
  const renderInputManagers = () => inputProps.map((input, idx) => <InputManager key={ idx } { ...input } handleOnChange={ handleOnChange } /> )

  return (
    <Row>
      { renderInputManagers() }
    </Row>
  );
};
