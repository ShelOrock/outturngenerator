import { StylePropTypes, PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  id: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: any[];
  width?: string;
  disabled?: boolean;
};

interface StyleProps extends Omit<ComponentProps,
  | "id"
  | "name"
  | "value"
  | "error"
  | "onChange"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
