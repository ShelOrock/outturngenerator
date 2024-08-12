import { StylePropTypes, PropsWithSpacing } from "../../types";

import { Styles } from "../../enums";


interface ComponentProps extends PropsWithSpacing {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: Styles.ButtonVariants;
  color?: Styles.Colors;
  width?: string;
};

interface StyleProps extends Omit<ComponentProps, "onClick"> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};