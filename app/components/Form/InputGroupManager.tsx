import * as React from "react";

import InputManager from "../Form/InputManager";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledDiv: { Row },
} = StyledComponents;

export default ({ inputProps, handleOnChange }) => {
  return (
    <Row>
      { inputProps.map((input, idx) => <InputManager key={ idx } { ...input } handleOnChange={ handleOnChange }/> ) }
    </Row>
  );
};
