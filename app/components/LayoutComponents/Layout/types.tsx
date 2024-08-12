import { StylePropTypes, PropsWithSpacing } from "../../../types";

import { Styles } from "../../../enums";


interface ComponentProps extends PropsWithSpacing {
  justifyContent?: Styles.Layout.JustifyContent;
  alignItems?: Styles.Layout.AlignItems;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  wrap?: string;
  size?: number | string;
  overflow?: string;
  color?: Styles.Colors;
  header?: boolean;
};

interface StyleProps extends Omit<ComponentProps, ""> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
