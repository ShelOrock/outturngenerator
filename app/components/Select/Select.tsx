import React from "react";

import StyledSelect from "./styles";
import ComponentMapping from "../ComponentMapping";
import Option from "../Option";

import { ComponentProps } from "./types";

const Select: React.FC<ComponentProps> = ({
  id,
  name,
  value,
  onChange,
  options,
  error,
  disabled = false,
  width = "default",
  ...spacingProps
}) => (
  <StyledSelect
    id={ id }
    name={ name }
    value={ value }
    onChange={ onChange }
    disabled={ disabled }
    $width={ width }
    { ...spacingProps }
  >
    <ComponentMapping
      componentData={ options }
      renderComponent={ option => <Option value={ option.value } disabled={ option.disabled } hidden={ option.hidden }>{ option.name }</Option> }
    />
  </StyledSelect>
);

export default Select;
