import { StylePropTypes, PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  index: number;
  active?: boolean;
  complete?: boolean;
  error?: boolean;
  onClick?: () => void;
};

interface StyleProps extends Omit<ComponentProps,
  | "id"
  | "name"
  | "value"
  | "onChange"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
