import { PropsWithSpacing } from "../../../types";

interface ComponentProps extends PropsWithSpacing {
  formValues: { [id: string ]: any };
  isEditing?: boolean;
  decrementStep: () => void;
  incrementStep: () => void;
  dispatchToForm: (payload: any) => void;
};

export { 
  ComponentProps
};