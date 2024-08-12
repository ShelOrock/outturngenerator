import React from "react";

import StyledBody from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";

const Body: React.FC<ComponentProps> = ({
  color,
  weight = Styles.FontWeights.regular,
  overflow = false,
  children,
  ...spacingProps
}) => (
  <StyledBody
    $color={ color }
    $weight={ weight }
    $overflow={ overflow }
    { ...spacingProps }
  >{ children }</StyledBody>
);

export default Body;
