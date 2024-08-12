import { StylePropTypes, PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  header?: boolean;
  forwardRef?: any;
};

interface StyleProps extends Omit<ComponentProps, ""> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
