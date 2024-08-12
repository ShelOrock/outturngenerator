import React from "react";

import StyledSubheading from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";

const Subheading: React.FC<ComponentProps> = ({
  weight = Styles.FontWeights.semiBold,
  children,
  ...spacingProps
}) => (
  <StyledSubheading
    $weight={ weight }
    { ...spacingProps }
  >{ children }</StyledSubheading>
);

export default Subheading;
