import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

const StyledMain = styled.main<ElementProps>`
  display: flex;
  background-color: #F8F9FA;
  
  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledMain; 
