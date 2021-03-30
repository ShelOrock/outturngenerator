import * as React from "react";

import InputSectionManager from "../Form/InputSectionManager";
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
  handleOnChange,
  localState,
}) => {
  return (
    <InputFormContainer>
      {Array.isArray(inputPropsGenerator(handleOnChange, localState)) ? (
        <InputSectionManager
          sectionHeaderProps={""}
          inputProps={inputPropsGenerator(handleOnChange, localState)}
        />
      ) : (
        Object.entries(inputPropsGenerator(handleOnChange, localState)).map(
          (section, idx) => (
            <InputSectionManager
              key={idx}
              sectionHeaderProps={section[0]}
              inputProps={section[1]}
            />
          )
        )
      )}
      <Row>
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
