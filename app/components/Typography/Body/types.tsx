import { StylePropTypes, PropsWithSpacing } from "../../../types";

import { Styles } from "../../../enums";

interface ComponentProps extends PropsWithSpacing {
  color?: Styles.Colors;
  weight?: Styles.FontWeights;
  overflow?: boolean;
};

interface StyleProps extends Omit<ComponentProps, ""> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
