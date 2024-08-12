import { PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  heading: string;
  subheading?: string;
  body: string;
  content?: React.ReactNode;
  actions: React.ReactNode;
};

export { 
  ComponentProps
};