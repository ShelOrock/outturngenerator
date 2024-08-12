import React from "react";

import StyledListItem from "./styles";

import { ComponentProps } from "./types";

const ListItem: React.FC<ComponentProps> = ({
  children,
  ...spacingProps
}) => <StyledListItem { ...spacingProps }>{ children }</StyledListItem>;

export default ListItem;
