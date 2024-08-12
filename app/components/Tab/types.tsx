import { StylePropTypes, PropsWithSpacing } from "../../types";

import { Styles, FlavorProfiles } from "../../enums";

interface ComponentProps extends PropsWithSpacing {
  color: Styles.Colors | FlavorProfiles;
  selected?: boolean;
};

interface StyleProps extends Omit<ComponentProps, ""> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
