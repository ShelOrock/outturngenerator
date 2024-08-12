import { StylePropTypes, PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  inputRef?: React.RefObject<HTMLInputElement> | null;
  id: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  width?: string;
};

interface StyleProps extends Omit<ComponentProps,
  | "type"
  | "id"
  | "name" 
  | "value"
  | "label"
  | "placeholder"
  | "error"
  | "onChange"
  | "onClick"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
