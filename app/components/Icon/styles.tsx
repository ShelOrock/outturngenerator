import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

import { Styles } from "../../enums";

const StyledIcon = styled.svg<ElementProps>`
  width: ${ ({ theme, $size }) => theme.componentSize.icon[$size] };
  height: ${ ({ theme, $size }) => theme.componentSize.icon[$size] };
  fill: ${ ({ theme, $color }) => {
    if(!$color) {
      return theme.color.black;
    };

    switch($color) {
      case Styles.Colors.white:
        return theme.color.white;

      case Styles.Colors.black:
        return theme.color.black;

      case $color:
        return theme.color[$color].default;

      default:
        return theme.color.black;
    };
  } };

  &:hover {
    fill: ${ ({ theme, $color }) => {
      if(!$color) {
        return theme.color.black;
      };

      switch($color) {
        case Styles.Colors.white:
          return theme.color.white;

        case Styles.Colors.black:
          return theme.color.black;

        case $color:
          return theme.color[$color].hover;

        default:
          return theme.color.black;
      };
    } };
  }

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledIcon;
