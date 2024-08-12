import { StylePropTypes, PropsWithSpacing } from "../../types";

interface ComponentProps<ComponentData> extends PropsWithSpacing {
  componentData: ComponentData[];
  renderComponent: (ComponentData) => React.ReactNode;
};

interface StyleProps extends Omit<ComponentProps<any>, 
  | "componentData"
  | "renderComponent"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export {
  ComponentProps,
  ElementProps
};
