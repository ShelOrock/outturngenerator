import React from "react";

import { Row, Column } from "../LayoutComponents";
import Label from "../Label";
import Select from "../Select";
import * as Typography from "../Typography";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";


const SelectModule: React.FC<ComponentProps> = ({
  id,
  name, 
  value,
  label = "",
  helperText = "",
  onChange,
  options,
  error,
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
    <Select
      id={ id }
      name={ name }
      value={ value }
      onChange={ onChange }
      options={ options }
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

export default SelectModule;
