import { PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  pages: ({ id: string | number, page: number | "..." })[];
  activePage: number;
  totalPages: number;
  lowerBound: number;
  upperBound: number;
  allResults: number;
  setActivePage: any;
  incrementPage: () => void;
  decrementPage: () => void;
};

export { 
  ComponentProps
};