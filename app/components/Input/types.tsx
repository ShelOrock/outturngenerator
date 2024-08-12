import { StylePropTypes, PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  inputRef?: React.RefObject<HTMLInputElement> | null;
  type: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  helperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void | null;
  error?: string;
  disabled?: boolean;
  width?: string;
};

interface StyleProps extends Omit<ComponentProps,
  | "inputRef"
  | "type"
  | "id"
  | "name" 
  | "value"
  | "placeholder"
  | "onChange"
  | "onClick"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
