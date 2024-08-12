import { StylePropTypes, PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  col?: number | "auto";
  size?: number | "none";
}; 

interface StyleProps extends Exclude<ComponentProps, ""> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
