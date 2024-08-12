import { schema } from "normalizr";

import { AppDataSlices } from "../../utilities"

const cask = new schema.Entity(AppDataSlices.CASKS);

const casks = [ cask ];

export {
  cask,
  casks
};
