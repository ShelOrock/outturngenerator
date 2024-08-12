import React from "react";

import StyledDrawer from "./styles";

import { ComponentProps } from "./types";

const Drawer: React.FC<ComponentProps> = ({
  children,
  ...spacingProps
}) => (
  <StyledDrawer { ...spacingProps }>{ children }</StyledDrawer>
);

export default Drawer;
