import styled from "styled-components";

import { utilityFunctions } from "../../../utilities";

import { ElementProps } from "./types";

const StyledBody = styled.p<ElementProps>`
  margin: 0;
  font-size: ${ ({ theme }) => theme.font.size.body };
  font-family: ${ ({ theme }) => theme.font.family.default };
  font-weight: ${ ({ theme, $weight }) => theme.font.weight[$weight] };
  color: ${ ({ theme, $color }) => {
    if($color) {
      return theme.color[$color].default
    };

    return theme.color.black;
  } };

  overflow: ${ ({ $overflow }) => $overflow ? "hidden" : "visible" };
  text-overflow: ${ ({ $overflow }) => $overflow ? "ellipsis" : "clip" };

  &:hover {
    color: ${ ({ theme, $color }) => {
      if($color) {
        return theme.color[$color].hover
      };

      return theme.color.black;
    } };
  }
  
  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledBody;
