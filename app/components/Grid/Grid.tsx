import React from "react";

import { Row } from "../LayoutComponents";
import GridItem from "../GridItem";
import ComponentMapping from "../ComponentMapping"

import { ComponentProps } from "./types";

const Grid: React.FC<ComponentProps<any>> = ({
  componentData,
  renderComponent,
  col,
  size,
  height,
  width,
  justifyContent,
  alignItems,
  ...spacingProps
}) => (
  <Row
    height={ height }
    width={ width }
    justifyContent={ justifyContent }
    alignItems={ alignItems }
    { ...spacingProps }
  >
    <ComponentMapping
      componentData={ componentData }
      renderComponent={ component => <GridItem size={ size } key={ component.id }>{ renderComponent(component) }</GridItem>}
    />
  </Row>
);

export default Grid;
