import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

const StyledPaper = styled.div<ElementProps>`
  background-color: ${ ({ theme }) => theme.color.white };
  border-radius: 8px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -2px,
    rgba(0, 0, 0, 0.2) 0px 1px 4px -3px;
  position: ${ ({ $position }) => $position };
  width: ${ ({ theme, $width }) => !$width ? "auto" : theme.componentSize.paper[$width] };
  z-index: 1;

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledPaper;
