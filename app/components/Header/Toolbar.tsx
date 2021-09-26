//Dependency Libraries
import * as React from "react";

//Components
// import ButtonManager from '../Button/ButtonManager';
//Styled Components
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledType: { Title },
  StyledDiv: { Row },
} = StyledComponents;

//Types
import { ToolbarPropTypes } from "../../types";

export default ({
  pageTitle,
}: ToolbarPropTypes) => {

  return (
  <Row justifyContent="space-between">
    <Row alignItems="center">
      <Title>{ pageTitle }</Title>
      {/* { addButtonProps && !!Object.keys(addButtonProps).length && <ButtonManager { ...addButton } /> } */}
    </Row>
    <Row alignItems='center'>
    {/* { deleteButtonProps && !!Object.keys(deleteButtonProps).length && <ButtonManager { ...deleteButton }/> } */}
    </Row>
  </Row>
)};
