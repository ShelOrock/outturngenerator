import { PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  value: string;
  hidden?: boolean;
  disabled?: boolean;
};

export { 
  ComponentProps
};