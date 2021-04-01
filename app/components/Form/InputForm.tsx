import * as React from "react";

import InputSectionManager from "./InputSectionManager";
import * as StyledComponents from "../styledcomponents/index";
const {
  StyledDiv: { Row },
  StyledNavigation: { LinkButton },
  StyledForm: { InputFormContainer },
} = StyledComponents;

export default ({
  backLinkButton,
  forwardLinkButton,
  inputPropsGenerator,
  handleOnChange
}) => {
  return (
    <InputFormContainer>
    {
      inputPropsGenerator.map(({ sectionTitle, inputProps }, idx) => (
      <InputSectionManager
        key={ idx }
        sectionHeaderProps={ sectionTitle }
        inputProps={ inputProps }
        handleOnChange={ handleOnChange }
      />
      ))
    }
      <Row justifyContent='flex-end'>
        <LinkButton to={backLinkButton.link}>
          {backLinkButton.destination}
        </LinkButton>
        <LinkButton to={forwardLinkButton.link}>
          {forwardLinkButton.destination}
        </LinkButton>
      </Row>
    </InputFormContainer>
  );
};
