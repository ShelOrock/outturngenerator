import React from "react";

import StyledGridItem from "./styles";

import { ComponentProps } from "./types";

const GridItem: React.FC<ComponentProps> = ({
  col = "auto",
  size = "none",
  children,
  ...spacingProps
}) => (
  <StyledGridItem
    $col={ col }
    $size={ size }
    { ...spacingProps }
  >{ children }</StyledGridItem>
);

export default GridItem;
