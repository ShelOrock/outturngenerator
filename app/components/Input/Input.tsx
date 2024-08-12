import React from "react";

import StyledInput from "./styles";

import { ComponentProps } from "./types";

const Input: React.FC<ComponentProps> = ({
  inputRef = null,
  type,
  id,
  name,
  value,
  placeholder = "",
  onChange,
  onClick,
  error = "",
  disabled = false,
  width = "default",
  ...spacingProps
}) => (
  <StyledInput
    ref={ inputRef }
    id={ id }
    type={ type }
    name={ name }
    value={ value }
    placeholder={ placeholder }
    onChange={ onChange }
    onClick={ onClick }
    $error={ error }
    $disabled={ disabled }
    $width={ width }
    { ...spacingProps }
  />
);

export default Input;
