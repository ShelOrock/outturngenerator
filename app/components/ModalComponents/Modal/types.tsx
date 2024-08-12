import { StylePropTypes, PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  open: boolean;
};

interface StyleProps extends Omit<ComponentProps, "open"> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
