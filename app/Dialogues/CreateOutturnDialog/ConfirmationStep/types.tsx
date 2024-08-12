import { PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  name: string;
  description: string;
  casks: string[];
  containsErrors: boolean;
  decrementStep: () => void;
  onSubmit: any;
};

export { 
  ComponentProps
};