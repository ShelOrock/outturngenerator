import React from "react";

import { Row, Column } from "../LayoutComponents";
import Label from "../Label";
import Input from "../Input";
import * as Typography from "../Typography";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";

const InputModule: React.FC<ComponentProps> = ({
  inputRef = null,
  id,
  type,
  name,
  value,
  label = "",
  placeholder = "",
  helperText = "",
  onChange,
  onClick,
  error = "",
  disabled,
  width,
}) => (
  <Column
    width="full"
    mt={ Styles.Spacing.medium }
  >
    <Row>
      <Label ml={ Styles.Spacing.medium }>{ label }</Label>
      <Typography.Body ml={ Styles.Spacing.extraSmall }>{ helperText }</Typography.Body>
    </Row>
    <Input
      inputRef={ inputRef }
      id={ id }
      type={ type }
      name={ name }
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange }
      onClick={ onClick }
      disabled={ disabled }
      error={ error }
      width={ width }
      mt={ Styles.Spacing.extraSmall }
    />
    <Typography.Body
      color={ Styles.Colors.danger }
      mt={ Styles.Spacing.extraSmall }
    >{ error }</Typography.Body>
  </Column>
);

export default InputModule;
