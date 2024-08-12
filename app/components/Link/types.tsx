import { StylePropTypes, PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  to: string;
  onClick?;
  width?: string;
};

interface StyleProps extends Omit<ComponentProps,
  | "to"
  | "onClick"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
