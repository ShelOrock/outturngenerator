import React from "react";

import StyledButton from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";

const Button: React.FC<ComponentProps> = ({
  onClick,
  disabled = false,
  variant = Styles.ButtonVariants.primary,
  color = Styles.Colors.primary,
  children,
  width,
  ...spacingProps
}) => (
  <StyledButton
    onClick={ onClick }
    disabled={ disabled }
    $variant={ variant }
    $color={ color }
    $width={ width }
    { ...spacingProps }
  >{ children }</StyledButton>
);

export default Button;