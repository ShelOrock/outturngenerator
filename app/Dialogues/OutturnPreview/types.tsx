import { PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  name: string;
  description: string;
  casks: any[];
};

export { 
  ComponentProps
};