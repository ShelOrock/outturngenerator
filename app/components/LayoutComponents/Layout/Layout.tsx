import React from "react";

import StyledLayout from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";


const Layout: React.FC<ComponentProps> = ({
  justifyContent = Styles.Layout.JustifyContent.flexStart,
  alignItems = Styles.Layout.AlignItems.flexStart,
  position = "static",
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto",
  width = "default",
  height = "default",
  maxWidth = "none",
  maxHeight = "none",
  wrap = "wrap",
  size = 1,
  overflow = "visible",
  color = Styles.Colors.transparent,
  header = false,
  children,
  ...spacingProps
}) => (
  <StyledLayout
    $justifyContent={ justifyContent }
    $alignItems={ alignItems }
    $position={ position }
    $top={ top }
    $right={ right }
    $bottom={ bottom }
    $left={ left }
    $width={ width }
    $height={ height }
    $maxWidth={ maxWidth }
    $maxHeight={ maxHeight }
    $wrap={ wrap }
    $size={ size }
    $overflow={ overflow }
    $color={ color }
    $header={ header }
    { ...spacingProps }
  >{ children }</StyledLayout>
);

export default Layout;
