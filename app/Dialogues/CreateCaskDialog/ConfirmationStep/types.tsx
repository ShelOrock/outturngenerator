import { PropsWithSpacing } from "../../../types";

import { FlavorProfiles } from "../../../enums";

interface ComponentProps extends PropsWithSpacing {
  caskNumber: string;
  name: string;
  description: string;
  price: string;
  region: string;
  age: string;
  flavorProfile: FlavorProfiles;
  outturnId: string;
  decrementStep: () => void;
  onSubmit: any;
  containsErrors: boolean;
};

export { 
  ComponentProps
};