import React from "react";

import StyledHeader from "./styles";

import { ComponentProps } from "./types";

const Header: React.FC<ComponentProps> = ({
  justifyContent,
  alignItems,
  width,
  children,
  ...spacingProps
}) => (
  <StyledHeader
    $justifyContent={ justifyContent }
    $alignItems={ alignItems }
    $width="full"
    { ...spacingProps }
  >{ children }</StyledHeader>
);

export default Header;
