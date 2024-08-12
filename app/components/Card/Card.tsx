import React from "react";

import Paper from "../Paper";
import { Row, Column } from "../LayoutComponents";
import * as Typography from "../Typography";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";

const Card: React.FC<ComponentProps> = ({ 
  heading,
  subheading = "",
  body,
  content,
  actions,
  ...spacingProps
}) => (
  <Paper { ...spacingProps }>
    <Column justifyContent={ Styles.Layout.JustifyContent.spaceBetween }>
      <Column>
        <Column>
          <Typography.Heading>{ heading }</Typography.Heading>
          <Typography.Subheading weight={ Styles.FontWeights.medium }>{ subheading }</Typography.Subheading>
          <Typography.Body mt={ Styles.Spacing.small }>{ body }</Typography.Body>
        </Column>
        <Row mt={ Styles.Spacing.small }>{ content }</Row>
      </Column>
      { actions }
    </Column>
  </Paper>
);

export default Card;
