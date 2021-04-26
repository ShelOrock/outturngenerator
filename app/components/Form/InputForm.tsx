//Dependency Libraries
import * as React from "react";

//Components
import InputSectionManager from "./InputSectionManager";
import ButtonManager from '../Button/ButtonManager';
//StyledComponents
import * as StyledComponents from "../styledcomponents";
const {
  StyledDiv: { Row },
  StyledNavigation: { LinkButton },
  StyledForm: { InputFormContainer },
} = StyledComponents;

//Types
import { InputFormPropTypes } from "../../types";

export default ({
  backLinkButton,
  forwardLinkButton,
  confirmButton,
  cancelButton,
  inputPropsGenerator,
  onChange
}: InputFormPropTypes) => {

  const renderInputSectionManagers = (inputPropsGenerator): JSX.Element[] => (
    inputPropsGenerator.map(({ sectionTitle, inputProps }, idx) => (
      <InputSectionManager
        key={ idx }
        sectionHeaderProps={ sectionTitle }
        inputProps={ inputProps }
        onChange={ onChange }
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
