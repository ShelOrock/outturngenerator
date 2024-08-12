import { StylePropTypes, PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
};

interface StyleProps extends Omit<ComponentProps,
  | "id"
  | "name" 
  | "checked"
  | "onChange"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
