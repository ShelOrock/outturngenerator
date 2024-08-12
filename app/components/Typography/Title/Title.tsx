import React from "react";

import StyledTitle from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";


const Title: React.FC<ComponentProps> = ({
  weight = Styles.FontWeights.extraBold,
  children,
  ...spacingProps
}) => (
  <StyledTitle
    $weight={ weight }
    { ...spacingProps }
  >{ children }</StyledTitle>
);

export default Title;
