import styled from "styled-components";

import { ElementProps } from "./types";

import { utilityFunctions } from "../../utilities";

const StyledLabel = styled.p<ElementProps>`
  font-size: 14px;

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledLabel;
