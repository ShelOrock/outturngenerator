import React from "react";

import StyledChip from "./styles";
import Tab from "../Tab";

import { ComponentProps } from "./types";

import { Styles } from "../../enums";

const Chip: React.FC<ComponentProps> = ({
  onClick,
  color = Styles.Colors.primary,
  selected,
  clickable = false,
  icon,
  children,
  ...spacingProps
}) => (
    <StyledChip
      onClick={ onClick }
      $color={ color }
      $clickable={ clickable }
      { ...spacingProps }
    >
      <Tab color={ color } selected={ selected }/>
      { children }
    </StyledChip>
);

export default Chip;
