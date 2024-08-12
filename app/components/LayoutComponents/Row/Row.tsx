import React from "react";

import StyledRow from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";


const Row: React.FC<ComponentProps> = ({
  justifyContent = Styles.Layout.JustifyContent.flexStart,
  alignItems = Styles.Layout.AlignItems.flexStart,
  width = "default",
  height = "default",
  children,
  ...spacingProps
}) => (
  <StyledRow
    $justifyContent={ justifyContent }
    $alignItems={ alignItems }
    $width={ width }
    $height={ height }
    { ...spacingProps }
  >{ children }</StyledRow>
);

export default Row;
