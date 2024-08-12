import React from "react";

import StyledLink from "./styles";

import { ComponentProps } from "./types";

const Link: React.FC<ComponentProps> = ({
  to = "",
  onClick,
  children,
  width = "default",
  ...spacingProps
}) => (
  <StyledLink
    to={ to }
    onClick={ onClick }
    $width={ width }
    { ...spacingProps }
  >{ children }</StyledLink>
);

export default Link;
