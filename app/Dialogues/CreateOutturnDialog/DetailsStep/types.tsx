import { PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  formValues: { [id: string]: any };
  incrementStep: () => void;
  decrementStep: () => void;
  dispatchToForm: (payload: any) => void;
};

export { 
  ComponentProps
};