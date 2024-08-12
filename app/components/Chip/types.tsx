import { StylePropTypes, PropsWithSpacing } from "../../types";

import { FlavorProfiles, Styles } from "../../enums";


interface ComponentProps extends PropsWithSpacing {
  color?: Styles.Colors | FlavorProfiles;
  clickable?: boolean;
  selected?: boolean;
  icon?: string;
  tab?: React.ReactNode;
  onClick?: () => void;
};

interface StyleProps extends Exclude<ComponentProps, "onClick"> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
