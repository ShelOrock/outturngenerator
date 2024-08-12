import React from "react";

import Main from "../Main";
import { Row } from "../LayoutComponents";
import * as Typography from "../Typography";

import { Styles } from "../../enums";

interface ComponentProps {
  heading: string;
  content: React.ReactNode;
};

const DefaultTemplate: React.FC<ComponentProps> = ({ heading, content }) => (
  <Main>
    <Row padding={ Styles.Spacing.large }>
      <Typography.Heading>{ heading }</Typography.Heading>
      { content }
    </Row>
  </Main>
);

export default DefaultTemplate;
