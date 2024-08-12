import React from "react";

import StyledList from "./styles";
import { ListItem } from "../ListItem";
import ComponentMapping from "../ComponentMapping";

import { ComponentProps } from "./types";

const List: React.FC<ComponentProps<any>> = ({
  componentData,
  renderComponent,
  ...spacingProps
}) => (
  <StyledList { ...spacingProps }>
    <ComponentMapping
      componentData={ componentData }
      renderComponent={ component => <ListItem key={ component.id }>{ renderComponent(component) }</ListItem> }
    />
  </StyledList>
);

export default List;
