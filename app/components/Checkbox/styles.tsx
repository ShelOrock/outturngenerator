import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

const StyledCheckbox = styled.input<ElementProps>`
  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) }
`;

export default StyledCheckbox;
