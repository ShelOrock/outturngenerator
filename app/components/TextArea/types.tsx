import { StylePropTypes, PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  width?: string;
};

interface StyleProps extends Omit<ComponentProps,
  | "id"
  | "name"
  | "value"
  | "placeholder"
  | "onChange"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
