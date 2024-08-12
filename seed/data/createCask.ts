import { CaskAttributes } from "../../server/types/models";

import {
  NAMES,
  DESCRIPTIONS,
  CASK_TYPES,
  FLAVOR_PROFILES,
  REGIONS,
  MONTHS
} from '../staticData';

import * as utilities from "./utilities";

const createCask = (): CaskAttributes => {

  const MINIMUM_CASK_NUMBER = 1;
  const MAXIMUM_CASK_NUMBER = 999 - MINIMUM_CASK_NUMBER;
  const caskNumber = utilities.generateNumber(MAXIMUM_CASK_NUMBER) + MINIMUM_CASK_NUMBER;
  const bottleNumber = utilities.generateNumber(MAXIMUM_CASK_NUMBER) + MINIMUM_CASK_NUMBER;

  const MINIMUM_CASK_NAME_LENGTH = 1;
  const MAXIMUM_CASK_NAME_LENGTH = 3;
  const caskNameLength = utilities.generateNumber(MAXIMUM_CASK_NAME_LENGTH) + MINIMUM_CASK_NAME_LENGTH;
  const caskName = utilities.generateArray(caskNameLength).map(() => utilities.selectRandomArrayItem(NAMES)).join(" ");

  const MINIMUM_PRICE = 100;
  const MAXIMUM_PRICE = 3000 - MINIMUM_PRICE;
  const price = utilities.generateNumber(MAXIMUM_PRICE) + MINIMUM_PRICE;

  const currentYear = new Date().getFullYear();
  const MINIMUM_AGE = 4
  const MAXIMUM_AGE = 40 - MINIMUM_AGE;
  const age = utilities.generateNumber(MAXIMUM_AGE) + MINIMUM_AGE;

  const MINIMUM_BOTTLE_COUNT = 50;
  const MAXIMUM_BOTTLE_COUNT = 600 - MINIMUM_BOTTLE_COUNT;
  const bottleCount = utilities.generateNumber(MAXIMUM_BOTTLE_COUNT) + MINIMUM_BOTTLE_COUNT;

  return {
    name: caskName,
    caskNumber: `${ caskNumber }.${ bottleNumber }`,
    price: `${ price.toFixed(2) }`,
    flavorProfile: utilities.selectRandomArrayItem(FLAVOR_PROFILES),
    description: utilities.selectRandomArrayItem(DESCRIPTIONS),
    age: `${ age }`,
    date: `${ utilities.selectRandomArrayItem(MONTHS) } ${ currentYear - age }`,
    region: utilities.selectRandomArrayItem(REGIONS),
    caskType: utilities.selectRandomArrayItem(CASK_TYPES),
    abv: utilities.generateNumber(20).toFixed(1),
    bottleCount: `${ bottleCount }`,
    allocation: `${ utilities.generateNumber(bottleCount) }`
  };
};

export default createCask;
