import React from "react";

import { Row, Column } from "../LayoutComponents";
import Label from "../Label";
import TextArea from "../TextArea";
import * as Typography from "../Typography";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";


const TextAreaModule: React.FC<ComponentProps> = ({
  id,
  name,
  value,
  label = "",
  placeholder = "",
  helperText = "",
  onChange,
  error = "",
  disabled,
  width
}) => (
  <Column
    width="full"
    mt={ Styles.Spacing.medium }
  >
    <Row>
      <Label ml={ Styles.Spacing.medium }>{ label }</Label>
      <Typography.Body ml={ Styles.Spacing.extraSmall }>{ helperText }</Typography.Body>
    </Row>
    <TextArea
      id={ id }
      name={ name }
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange }
      disabled={ disabled }
      width={ width }
      mt={ Styles.Spacing.extraSmall }
    />
    <Typography.Body
      color={ Styles.Colors.danger }
      mt={ Styles.Spacing.extraSmall }
    >{ error }</Typography.Body>
  </Column>
);

export default TextAreaModule;
