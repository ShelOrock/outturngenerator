import styled from "styled-components";

import { utilityFunctions } from "../../utilities";

import { ElementProps } from "./types";

import { Styles } from "../../enums";

const StyledButton = styled.button<ElementProps>`
  padding: 4px 8px;
  cursor: ${ ({ disabled }) => disabled ? "default" : "pointer" };
  font-size: ${ ({ theme }) => theme.font.size.default };
  border-radius: 4px;
  width: ${ ({ theme, $width }) => theme.componentSize.allComponents[$width] };

  background-color: ${ ({ theme, $variant, $color, disabled }) => {
    switch($variant) {
      case Styles.ButtonVariants.primary:
        if(disabled) {
          return theme.color.disabled;
        };

        return theme.color[$color].default;

      case Styles.ButtonVariants.secondary:
        return theme.color.transparent;

      case Styles.ButtonVariants.tertiary:
        return theme.color.transparent;
      
      default:
        if(disabled) {
          return theme.color.disabled;
        };

        return theme.color[$color].default;
    };
  } };

  color: ${ ({ theme, $color, $variant, disabled }) => {
    switch($variant) {
      case Styles.ButtonVariants.primary:
        if(disabled) {
          return theme.color.white;
        };

        return theme.color.white;

      case Styles.ButtonVariants.secondary:
      case Styles.ButtonVariants.tertiary:
        if(disabled) {
          return theme.color.disabled;
        };

        return theme.color[$color].default;

      default:   
        if(disabled) {
          return theme.color.white;
        };
         
        return theme.color.white;
    };
  } };

  border: ${ ({ theme, $color, $variant, disabled }) => {
    switch($variant) {
      case Styles.ButtonVariants.primary:
      case Styles.ButtonVariants.secondary:
        if(disabled) {
          return `1px solid ${ theme.color.disabled }`;
        };

        return `1px solid ${ theme.color[$color].default }`;

      case Styles.ButtonVariants.tertiary:
        return `1px solid ${ theme.color.transparent }`;

      default:
        if(disabled) {
          return `1px solid ${ theme.color.disabled }`;
        };

        return `1px solid ${ theme.color[$color].default }`;
    };
  } };

  &:hover {
    background-color: ${ ({ theme, $color, $variant, disabled }) => {
      switch($variant) {
        case Styles.ButtonVariants.primary:
          if(disabled) {
            return theme.color.disabled;
          };

          return theme.color[$color].hover;

        case Styles.ButtonVariants.secondary:
        case Styles.ButtonVariants.tertiary:
          if(disabled) {
            return theme.color.transparent;
          };

          return theme.color.transparent;

        default:
          if(disabled) {
            return theme.color.disabled;
          };

          return theme.color[$color].hover;
      };
    } };

    color: ${ ({ theme, $color, $variant, disabled }) => {
      switch($variant) {
        case Styles.ButtonVariants.primary:
          if(disabled) {
            return theme.color.white;
          };

          return theme.color.white;

        case Styles.ButtonVariants.secondary:
        case Styles.ButtonVariants.tertiary:
          if(disabled) {
            return theme.color.disabled;
          };
  
          return theme.color[$color].hover;

        default:
          if(disabled) {
            return theme.color.white;
          };
  
          theme.color.white;
      };
    } };

    border: ${ ({ theme, $color, $variant, disabled }) => {
      switch($variant) {
        case Styles.ButtonVariants.primary:
        case Styles.ButtonVariants.secondary:
          if(disabled) {
            return `1px solid ${ theme.color.disabled }`;
          };
  
          return `1px solid ${ theme.color[$color].hover }`;

        case Styles.ButtonVariants.tertiary:
          return `1px solid ${ theme.color.transparent }`;

        default: 
          if(disabled) {
            return `1px solid ${ theme.color.disabled }`;
          };

          return `1px solid ${ theme.color[$color].hover }`;
      };
    } };
  }

  ${ ({ ...spacingProps }) => utilityFunctions.createSpacing(spacingProps) };
`;

export default StyledButton;
