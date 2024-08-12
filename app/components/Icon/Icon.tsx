import React from "react";

import StyledIcon from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";


const Icon: React.FC<ComponentProps> = ({
  path,
  color = Styles.Colors.white,
  size = "default",
  children,
  ...spacingProps
}) => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    $color={ color }
    $size={ size }
    { ...spacingProps }
  ><path d={ path } /></StyledIcon>
);

export default Icon;
