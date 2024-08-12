import React from "react";

import StyledCheckbox from "./styles";

import { ComponentProps } from "./types";

const Checkbox: React.FC<ComponentProps> = ({
  id,
  name,
  checked,
  onChange,
  ...spacingProps
}) => (
  <StyledCheckbox
    type="checkbox"
    id={ id }
    name={ name }
    checked={ checked }
    onChange={ onChange }
    { ...spacingProps }
  />
);

export default Checkbox;
