import styled from "styled-components";

import { utilityFunctions } from "../../../utilities";

import { ElementProps } from "./types";

const StyledModal = styled.div<ElementProps>`
  border-radius: 8px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -2px,
    rgba(0, 0, 0, 0.2) 0px 1px 4px -3px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  overflow: scroll;
  max-height: 95vh;

  background-color: ${ ({ theme }) => theme.color.white };

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledModal;