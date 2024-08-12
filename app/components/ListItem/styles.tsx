import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

const StyledListItem = styled.li<ElementProps>`
  width: 100%;
  
  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledListItem;
