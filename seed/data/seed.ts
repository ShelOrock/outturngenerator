import {
  createCask,
  createOutturn,
  createUser
} from '.';

import { Models } from '../../server/database'

import * as utilities from './utilities';

import USERS from '../staticData/users';

const createData = async () => {
  const MINIMUM_OUTTURN_LENGTH = 12;
  const MAXIMUM_OUTTURN_LENGTH = 36 - MINIMUM_OUTTURN_LENGTH;
  const outturnLength = utilities.generateNumber(MAXIMUM_OUTTURN_LENGTH) + MINIMUM_OUTTURN_LENGTH;
  const outturnArray = utilities.generateArray(outturnLength);

  const MINIMUM_CASKS_LENGTH = 500;
  const MAXIMUM_CASKS_LENGTH = 800 - MINIMUM_CASKS_LENGTH;
  const caskLength = utilities.generateNumber(MAXIMUM_CASKS_LENGTH) + MINIMUM_CASKS_LENGTH;
  const caskArray = utilities.generateArray(caskLength);

  const MINIMUM_USERS = 5;
  const MAXIMUM_USERS = 20 - MINIMUM_USERS;
  const usersLength = utilities.generateNumber(MAXIMUM_USERS) + MAXIMUM_USERS;
  const usersArray = utilities.generateArray(usersLength);

  const allOutturns = await Promise.all(outturnArray.map(async () => {
    const outturnAttributes = createOutturn();
    return await Models.Outturn.create(outturnAttributes);
  }));

  const outturnIds = allOutturns.map(outturn => outturn.id);
  const trackOutturns = {};

  await Promise.all(caskArray.map(async () => {
    const caskAttributes = createCask();
    const cask = await Models.Cask.create({
      ...caskAttributes,
      outturnId: utilities.selectRandomArrayItem(outturnIds)
    });

    if(trackOutturns.hasOwnProperty(cask.outturnId)) trackOutturns[cask.outturnId]++
    else trackOutturns[cask.outturnId] = 0;
    cask.update({
      ...cask,
      caskPosition: trackOutturns[cask.outturnId]
    });
  }));

  await Promise.all(usersArray.map(async () => {
    const UserAttributes = createUser();
    const associatedOutturn = utilities.selectRandomArrayItem(allOutturns);

    const user = await Models.User.create(UserAttributes);
    user.addOutturn(associatedOutturn);
  }));

  await Promise.all(USERS.map(async user => {
    await Models.User.create(user);
  }));
};

export default createData;