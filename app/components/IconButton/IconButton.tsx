import React from "react";

import Button from "../Button";
import Icon from "../Icon";
import { Row } from "../LayoutComponents";
import * as Typography from "../Typography";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";


const IconButton: React.FC<ComponentProps> = ({
  path,
  onClick,
  variant = Styles.ButtonVariants.primary,
  color = Styles.Colors.primary,
  disabled = false,
  children,
  width = "default",
  ...spacingProps
}) => (
  <Button
    onClick={ onClick }
    variant={ variant }
    color={ color }
    disabled={ disabled }
    width={ width }
    { ...spacingProps }
  >
    <Row alignItems={ Styles.Layout.AlignItems.center }>
      <Icon
        path={ path }
        // TODO
        color={ disabled || (variant as "primary") === Styles.Colors.primary ? Styles.Colors.white : color }
        size="xs"
      />
      { children && <Typography.Body
        color={ variant === Styles.ButtonVariants.primary ? Styles.Colors.white : color }
        ml={ Styles.Spacing.small }
      >{ children }</Typography.Body> }
    </Row>
  </Button>
);

export default IconButton;
