import * as React from "react";

import InputSectionManager from "./InputSectionManager";
import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from "../styledcomponents";
const {
  StyledDiv: { Row },
  StyledNavigation: { LinkButton },
  StyledForm: { InputFormContainer },
} = StyledComponents;

import { InputFormPropTypes } from "../../types";

export default ({
  backLinkButton,
  forwardLinkButton,
  confirmButton,
  cancelButton,
  inputPropsGenerator,
  handleOnChange
}: InputFormPropTypes) => {

  const renderInputSectionManagers = inputPropsGenerator => (
    inputPropsGenerator.map(({ sectionTitle, inputProps }, idx) => (
      <InputSectionManager
        key={ idx }
        sectionHeaderProps={ sectionTitle }
        inputProps={ inputProps }
        handleOnChange={ handleOnChange }
      />
    ))
  );

  return (
    <InputFormContainer>
    { renderInputSectionManagers(inputPropsGenerator) }
      <Row alignItems='center' justifyContent='space-between'>
        { backLinkButton && 
          <LinkButton to={backLinkButton.link}>
            {backLinkButton.destination}
          </LinkButton>
        }
        <Row alignItems='center'>
          { confirmButton && <ButtonManager { ...confirmButton } /> }
          { cancelButton && <ButtonManager { ...cancelButton } /> }
          { forwardLinkButton &&
            <LinkButton to={forwardLinkButton.link}>
              {forwardLinkButton.destination}
            </LinkButton>
          }
        </Row>
      </Row>
    </InputFormContainer>
  );
};
