import { StylePropTypes, PropsWithSpacing } from "../../../types";

import { Styles } from "../../../enums";


interface ComponentProps extends PropsWithSpacing {
  justifyContent?: Styles.Layout.JustifyContent;
  alignItems?: Styles.Layout.AlignItems;
  width?: string;
  height?: string;
};

interface StyleProps extends Omit<ComponentProps, ""> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
