import { PropsWithSpacing } from "../../types";

import { Styles } from "../../enums";

interface ComponentProps<ComponentData> extends PropsWithSpacing {
  componentData: ComponentData[];
  renderComponent: (componentData: ComponentData) => React.ReactNode;
  col?: number | "auto";
  size?: number | "none";
  height?: string;
  width?: string;
  justifyContent?: Styles.Layout.JustifyContent;
  alignItems?: Styles.Layout.AlignItems;
};

export { 
  ComponentProps
};