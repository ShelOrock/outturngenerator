import { StylePropTypes, PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  headerData: any[];
  bodyData: any[];
  bodyRenderComponent: any;
  handleOnDragEnd: (event: any) => void;
};

interface StyleProps extends Omit<ComponentProps,
  | "headerData"
  | "bodyData"
  | "bodyRenderComponent"
  | "handleOnDragEnd"
> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
