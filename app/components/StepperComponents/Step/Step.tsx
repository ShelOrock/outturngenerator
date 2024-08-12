import React from "react";

import { Row } from "../../LayoutComponents";
import Button from "../../Button";
import * as Typography from "../../Typography";
import Icon from "../../Icon";
import assets from "../../../assets";

import { Styles } from "../../../enums";

import { ComponentProps } from "./types";


const Step: React.FC<ComponentProps> = ({
  index,
  active = false,
  complete = false,
  error = false,
  onClick,
  children,
}) => (
  <Row
    justifyContent={ Styles.Layout.JustifyContent.center }
    alignItems={ Styles.Layout.AlignItems.center }
  >
    <Button
      color={ active || complete
        ? Styles.Colors.primary
        : error
          ? Styles.Colors.danger
          : Styles.Colors.neutral
      }
      onClick={ onClick }
    >{ index }</Button>
    {
      error
      ? <Icon
          path={ assets.closeIcon } // TODO: Change Icon
          color={ Styles.Colors.white }
        />
      : complete
      ? <Icon
          path={ assets.favoriteIcon } // TODO: Change Icon
          color={ Styles.Colors.white }
        />
      : <Typography.Body
        ml={ Styles.Spacing.small }
        color={ active ? Styles.Colors.white : Styles.Colors.disabled }
      >{ children }</Typography.Body>
    }
  </Row>
);

export default Step;
