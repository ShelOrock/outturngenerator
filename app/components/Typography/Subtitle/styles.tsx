import styled from "styled-components";

import { utilityFunctions } from "../../../utilities";

import { ElementProps } from "./types";

const StyledSubtitle = styled.h4<ElementProps>`
  margin: 0;
  font-size: ${ ({ theme }) => theme.font.size.subtitle };
  font-family: ${ ({ theme }) => theme.font.family.default };
  font-weight: ${ ({ theme, $weight }) => theme.font.weight[$weight] };
  
  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledSubtitle;
