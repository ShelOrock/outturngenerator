import * as React from "react";

import InputGroupManager from "./InputGroupManager";
import InputManager from "./InputManager";
import SelectManager from "../Select/SelectManager";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledType: { Subheader },
  StyledDiv: { Row, Column, HorizontalRule },
} = StyledComponents;

export default ({ sectionHeaderProps, inputProps, handleOnChange }) => {
  return (
    <Column>
      <Row justifyContent='space-between'>
        <Subheader> { sectionHeaderProps } </Subheader>
        <Column>
          { inputProps.map((input, idx) => Array.isArray(input)
            ? <InputGroupManager
                key={ idx }
                inputProps={ ...input }
                handleOnChange={ handleOnChange }
              />
            : input.type == 'select' 
              ? <SelectManager key={ idx } { ...input }/>
              : <InputManager
                key={ idx }
                { ...input }
                handleOnChange={ handleOnChange }
              />
            ) }
        </Column>
      </Row>
      <HorizontalRule />
    </Column>
  );
};
