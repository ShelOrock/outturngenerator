import * as React from "react";

import InputGroupManager from "./InputGroupManager";
import InputManager from "./InputManager";
import SelectManager from "../Select/SelectManager";
import TextAreaManager from './TextAreaManager';
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledType: { Subheader },
  StyledDiv: { PaddedDiv, Row, Column, HorizontalRule },
} = StyledComponents;

export default ({ sectionHeaderProps, inputProps, handleOnChange }) => {

  const renderInputManagers = () => (
    inputProps.map((input, idx) => Array.isArray(input)
  ? <InputGroupManager
      key={ idx }
      inputProps={ ...input }
      handleOnChange={ handleOnChange }
    />
  : input.type == 'select' 
    ? <SelectManager key={ idx } { ...input }/>
    : input.type == 'textArea' 
      ? <TextAreaManager key={ idx } { ...input } handleOnChange={ handleOnChange }/>
      : <InputManager
        key={ idx }
        { ...input }
        handleOnChange={ handleOnChange }
      />
  ))

  return (
    <Column>
      <Row justifyContent='space-between'>
        <PaddedDiv paddingTop='1rem'>
          <Subheader> { sectionHeaderProps } </Subheader>
        </PaddedDiv>
        <Column width='80%'>
          { renderInputManagers() }
        </Column>
      </Row>
      <HorizontalRule />
    </Column>
  );
};
