import { StylePropTypes, PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  id: string;
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  width?: string;
};

interface StyleProps extends Omit<ComponentProps,
  | "id"
  | "name"
  | "value"
  | "label"
  | "placeholder"
  | "onChange"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
