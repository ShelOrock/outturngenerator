import { PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  formValues: { [id: string]: any };
  incrementStep: () => void;
  dispatchToForm: (payload: any) => void;
};

export { 
  ComponentProps
};