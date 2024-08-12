import { PropsWithSpacing } from "../../types";

interface ComponentProps extends PropsWithSpacing {
  sortAttribute: string;
  sortDirection: string;
  setSortDirection: any;
  setSortAttribute: any;
  listOrder: any[],
  isListReordered: boolean,
  handleOnDragEnd: any;
};

export { 
  ComponentProps
};