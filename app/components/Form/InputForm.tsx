import * as React from "react";

import InputSectionManager from "./InputSectionManager";
import ButtonManager from '../Button/ButtonManager';
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledDiv: { Row },
  StyledNavigation: { LinkButton },
  StyledForm: { InputFormContainer },
} = StyledComponents;

export default ({
  backLinkButton,
  forwardLinkButton,
  confirmButton,
  cancelButton,
  inputPropsGenerator,
  handleOnChange
}: any) => {

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
        <LinkButton to={backLinkButton.link}>
          {backLinkButton.destination}
        </LinkButton>
        <Row alignItems='center'>
          { confirmButton && <ButtonManager { ...confirmButton } /> }
          { cancelButton && <ButtonManager { ...cancelButton } /> }
          <LinkButton to={forwardLinkButton.link}>
            {forwardLinkButton.destination}
          </LinkButton>
        </Row>
      </Row>
    </InputFormContainer>
  );
};
