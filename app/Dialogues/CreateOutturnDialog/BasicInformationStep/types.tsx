import { PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  formValues: { [id: string]: string };
  incrementStep: () => void;
  dispatchToForm: (payload: any) => void;
};

export { 
  ComponentProps
};