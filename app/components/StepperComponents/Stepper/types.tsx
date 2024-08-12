import { StylePropTypes, PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  steps: {
    id: number;
    label: string;
  }[];
  activeStep: number;
  setActiveStep: (value: number) => void;
};

interface StyleProps extends Omit<ComponentProps, ""> {};

interface ElementProps extends StylePropTypes<StyleProps>, PropsWithSpacing {};

export { 
  ComponentProps,
  ElementProps
};
