import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

const StyledTextArea = styled.textarea<ElementProps>`
  resize: none;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${ ({ theme }) => theme.color.neutral.default };
  width: ${ ({ theme, $width }) => theme.componentSize.input[$width] };

  &:focus {
    outline: 2px solid ${ ({ theme }) => theme.color.primary.default };
  }
  
  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledTextArea;
