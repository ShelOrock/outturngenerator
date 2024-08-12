export interface Cask {
  id?: string,
  caskPosition?: number;
  caskNumber?: string;
  name?: string;
  price?: string;
  flavorProfile?: string;
  age?: number | null;
  date?: string;
  region?: string;
  caskType?: string;
  grapeVariety?: string;
  abv?: string;
  bottleCount?: number;
  allocation?: number;
  description?: string;
  image?: number[];
  outturnId?: string | number;
}

export type Casks = Cask[];
