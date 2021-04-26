//Dependency Libraries
import * as React from "react";

//Components
import ButtonManager from "../Button/ButtonManager";
//Styled Components
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledType: { PageTitle },
  StyledDiv: { Row },
} = StyledComponents;

//Types
import { ButtonProps, ToolbarPropTypes } from "../../types";

export default ({
  pageTitle,
  addButtonProps = {} as ButtonProps,
  deleteButtonProps = {} as ButtonProps,
}: ToolbarPropTypes) => {

  const addButton: ButtonProps = addButtonProps
  && {
    size: addButtonProps.size,
    disabled: addButtonProps.disabled,
    variant: addButtonProps.variant,
    dispatchToStore: addButtonProps.dispatchToStore,
    onClick: addButtonProps.onClick
  }

  const deleteButton: ButtonProps = deleteButtonProps
  && {
    size: deleteButtonProps.size,
    disabled: deleteButtonProps.disabled,
    variant: deleteButtonProps.variant,
    dispatchToStore: deleteButtonProps.dispatchToStore,
    onClick: deleteButtonProps.onClick  
  }

  return (
  <Row justifyContent="space-between">
    <Row alignItems="center">
      <PageTitle>{ pageTitle }</PageTitle>
      { addButtonProps && !!Object.keys(addButtonProps).length && <ButtonManager { ...addButton } /> }
    </Row>
    <Row alignItems='center'>
    { deleteButtonProps && !!Object.keys(deleteButtonProps).length && <ButtonManager { ...deleteButton }/> }
    </Row>
  </Row>
)};
