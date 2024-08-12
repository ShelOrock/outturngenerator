import React from "react";

import Main from "../Main";
import Drawer from "../Drawer";
import { Row, Column } from "../LayoutComponents";
import * as Typography from "../Typography";
import Link from "../Link";

import { AppPaths, Styles } from "../../enums";
 
interface ComponentProps {
  heading: string;
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
};

const TwoColumnTemplate: React.FC<ComponentProps> = ({ 
  heading,
  sidebar,
  mainContent
}) => (
  <Main>
    <Drawer>{ sidebar }</Drawer>
    <Column padding={ Styles.Spacing.medium } width="full">
      <Link to={ AppPaths.home }>&lt; Back</Link>
      <Typography.Heading mt={ Styles.Spacing.medium }>{ heading }</Typography.Heading>
      <Row width="full" mt={ Styles.Spacing.medium }>{ mainContent }</Row>
    </Column>
  </Main>
);

export default TwoColumnTemplate;
