import React from "react";

import StyledColumn from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";


const Column: React.FC<ComponentProps> = ({
  justifyContent = Styles.Layout.JustifyContent.flexStart,
  alignItems = Styles.Layout.AlignItems.flexStart,
  width = "default",
  height = "default",
  children,
  ...spacingProps
}) => (
  <StyledColumn
    $justifyContent={ justifyContent }
    $alignItems={ alignItems }
    $width={ width }
    $height={ height }
    { ...spacingProps }
  >{ children }</StyledColumn>
);

export default Column;