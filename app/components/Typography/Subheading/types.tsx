import { StylePropTypes, PropsWithSpacing } from "../../../types";

import { Styles } from "../../../enums";


interface ComponentProps extends PropsWithSpacing {
  weight?: Styles.FontWeights;
};

interface StyleProps extends Omit<ComponentProps, ""> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
