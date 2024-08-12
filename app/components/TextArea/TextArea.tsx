import React from "react";

import StyledTextArea from "./styles";

import { ComponentProps } from "./types";

const TextArea: React.FC<ComponentProps> = ({
  id,
  name,
  value,
  placeholder = "",
  onChange,
  disabled = false,
  width = "default",
  ...spacingProps
}) => (
  <StyledTextArea
    id={ id }
    name={ name }
    value={ value }
    placeholder={ placeholder }
    onChange={ onChange }
    $disabled={ disabled }
    $width={ width }
    { ...spacingProps }
  />
);

export default TextArea;
