import { PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  filters: {
    region: string[];
    flavorProfile: string[];
  };
  handleOnClick: (type: string, filter: { filter: string }) => void;
};

export { 
  ComponentProps
};