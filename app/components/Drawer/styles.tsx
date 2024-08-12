import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

const StyledDrawer = styled.div<ElementProps>`${ ({ theme, ...spacingProps }) => `
  width: 200px;
  height: 100vh;
  background-color: ${ theme.color.neutral.default };
  padding:
    ${ theme.spacing.md }
    ${ theme.spacing.md }
    ${ theme.spacing.md };
  border-radius: 16px;
  overflow: scroll;

  ${ utilityFunctions.createSpacing(spacingProps) };
` }`;

export default StyledDrawer;
