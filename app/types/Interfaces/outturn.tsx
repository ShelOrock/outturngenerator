import { Cask } from './index';

export interface Outturn {
  id?: string;
  name?: string;
  description?: string;
  casks?: Cask[];
}

export type Outturns = Outturn[];
