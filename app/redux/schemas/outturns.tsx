import { schema } from "normalizr";

import { AppDataSlices } from "../../utilities"

const outturn = new schema.Entity(AppDataSlices.OUTTURNS);

const outturns = [ outturn ];

export {
  outturn,
  outturns
};
