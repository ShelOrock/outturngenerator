import { PropsWithSpacing } from "../../types";

import { Styles } from "../../enums";


interface ComponentProps extends PropsWithSpacing {
  path: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selected?: boolean;
  variant?: Styles.ButtonVariants;
  color?: Styles.Colors;
  disabled?: boolean;
  width?: string;
};

export { 
  ComponentProps
};