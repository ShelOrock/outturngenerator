import React from "react";

import StyledSubtitle from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";


const Subtitle: React.FC<ComponentProps> = ({
  weight = Styles.FontWeights.bold,
  children,
  ...spacingProps
}) => (
  <StyledSubtitle
    $weight={ weight }
    { ...spacingProps }
  >{ children }</StyledSubtitle>
);

export default Subtitle;
