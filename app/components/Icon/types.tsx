import { StylePropTypes, PropsWithSpacing } from "../../types";

import { Styles } from "../../enums";

interface ComponentProps extends PropsWithSpacing {
  path: string;
  color?: Styles.Colors;
  size?: string;
};

interface StyleProps extends Omit<ComponentProps, "path"> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
