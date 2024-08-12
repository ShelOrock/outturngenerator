import { OutturnAttributes } from "../../server/types/models";
import { faker } from "@faker-js/faker"

import { MONTHS, OUTTURN_DESCRIPTIONS } from "../staticData";

import * as utilities from "./utilities"

const createOutturn = (): OutturnAttributes => {

  const MINIMUM_YEAR = 2018;
  const MAXIMUM_YEAR = new Date().getFullYear() - MINIMUM_YEAR;
  const year = utilities.generateNumber(MAXIMUM_YEAR) + MINIMUM_YEAR;
  const month = utilities.selectRandomArrayItem(MONTHS);

  const DESCRIPTION_COUNT = 2
  const descriptionIndex = utilities.generateNumber(DESCRIPTION_COUNT);
  
  return {
    name: `${ month } ${ year } Product Release`,
    description: OUTTURN_DESCRIPTIONS[month][descriptionIndex]
  };
};

export default createOutturn;
