import React from "react";

import StyledPaper from "./styles";

import { ComponentProps } from "./types";

const Paper: React.FC<ComponentProps> = ({
  position = "static",
  width = "none",
  children,
  ...spacingProps
}) => (
  <StyledPaper
    $position={ position }
    $width={ width }
    { ...spacingProps }
  >{ children }</StyledPaper>
);

export default Paper;
