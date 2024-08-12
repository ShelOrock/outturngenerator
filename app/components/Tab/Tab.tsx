import React from "react";

import StyledTab from "./styles";

import { ComponentProps } from "./types";

const Tab: React.FC<ComponentProps> = ({ color, selected }) => (
  <StyledTab
    $color={ color }
    $selected={ selected }
  />
);

export default Tab;
