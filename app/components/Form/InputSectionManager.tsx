//Dependency Libraries
import * as React from "react";

//Components
import InputGroupManager from "./InputGroupManager";
import InputManager from "./InputManager";
import SelectManager from "../Select/SelectManager";
import TextAreaManager from './TextAreaManager';
//StyledComponents
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledType: { SubHeading },
  StyledDiv: { Row, Column, PaddedDiv, HorizontalRule },
} = StyledComponents;

export default ({
  sectionHeaderProps,
  inputProps,
  onChange
}) => {

  const renderInputManagers = (): JSX.Element | JSX.Element[] => (
    inputProps.map((input, idx) => Array.isArray(input)
  ? <InputGroupManager
      key={ idx }
      inputProps={ ...input }
      onChange={ onChange }
    />
  : input.type == 'select' 
    ? <SelectManager key={ idx } { ...input }/>
    : input.type == 'textArea' 
      ? <TextAreaManager
          key={ idx }
          { ...input }
          onChange={ onChange }
        />
      : <InputManager
        key={ idx }
        { ...input }
        onChange={ onChange }
      />
  ))

  return (
    <Column width='100%'>
      <Row justifyContent='space-between' width='100%'>
        { sectionHeaderProps &&
        <PaddedDiv paddingTop='1rem'>
          <SubHeading> { sectionHeaderProps } </SubHeading>
        </PaddedDiv>
        }
        <Column width='80%'>
          { renderInputManagers() }
        </Column>
      </Row>
      <HorizontalRule />
    </Column>
  );
};
