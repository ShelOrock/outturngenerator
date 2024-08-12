import React from "react";

import StyledLabel from "./styles";

import { ComponentProps } from "./types";

const Label: React.FC<ComponentProps> = ({ children, ...spacingProps }) => (
  <StyledLabel { ...spacingProps }>{ children }</StyledLabel>
);

export default Label;
