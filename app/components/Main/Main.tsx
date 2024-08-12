import React from "react";

import StyledMain from "./styles";

import { ComponentProps } from "./types";

const Main: React.FC<ComponentProps> = ({ children, ...spacingProps }) => (
  <StyledMain { ...spacingProps }>{ children }</StyledMain>
);

export default Main;
