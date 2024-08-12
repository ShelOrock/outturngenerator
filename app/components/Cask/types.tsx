import { PropsWithSpacing } from "../../types";

import { FlavorProfiles } from "../../enums";

interface ComponentProps extends PropsWithSpacing {
  id: string;
  caskPosition: number;
  caskNumber: string;
  name: string;
  price: string;
  region: string;
  age: string;
  flavorProfile: FlavorProfiles;
};

export { 
  ComponentProps
};