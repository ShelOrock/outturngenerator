import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

const StyledGridItem = styled.div<ElementProps>`
  flex: ${ ({ $size }) => $size };
  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledGridItem;
