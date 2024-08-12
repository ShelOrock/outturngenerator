import React from "react";

import StyledHeading from "./styles";

import { ComponentProps } from "./types";

import { Styles } from "../../../enums";


const Heading: React.FC<ComponentProps> = ({
  weight = Styles.FontWeights.bold,
  children,
  ...spacingProps
}) => (
  <StyledHeading
    $weight={ weight }
    { ...spacingProps }
  >{ children }</StyledHeading>
);

export default Heading;
