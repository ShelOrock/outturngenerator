import styled from "styled-components";
import { Link } from "react-router-dom"

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

const StyledLink = styled(Link)<ElementProps>`
  text-decoration: none;
  color: inherit;

  width: ${ ({ theme, $width }) => theme.componentSize.allComponents[$width] };

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledLink;
