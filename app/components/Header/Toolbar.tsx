import * as React from "react";

import ButtonManager from "../Button/ButtonManager";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledType: { PageTitle },
  StyledDiv: { Row },
} = StyledComponents;

export default ({
  pageTitle,
  addButtonProps = {},
  deleteButtonProps = {},
}: any) => {

  const addButton = {
    size: addButtonProps.size,
    disabled: addButtonProps.disabled,
    variant: addButtonProps.variant,
    onClickFunctionProps: addButtonProps.onClickProps
  }

  const deleteButton = {
    size: deleteButtonProps.size,
    disabled: deleteButtonProps.disabled,
    variant: deleteButtonProps.variant,
    onClickFunctionProps: deleteButtonProps.onClickProps  
  }

  return (
  <Row justifyContent="space-between">
    <Row alignItems="center">
      <PageTitle>{ pageTitle }</PageTitle>
      {
      Object.keys(addButtonProps).length
      ? <ButtonManager { ...addButton } />
      : null
      }
    </Row>
    <Row alignItems='center'>
    {
      Object.keys(deleteButtonProps).length
      ? <ButtonManager { ...deleteButton }/>
      : null
    }
    </Row>
  </Row>
)};
