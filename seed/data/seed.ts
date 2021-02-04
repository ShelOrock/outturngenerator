import {
  casks,
  outturns,
  users
} from './index';

import {
  Cask,
  Outturn,
  User,
} from '../../server/db/index'

import generateCaskInformation from './utils';

const seed = async () => {
  const allOutturns = await Promise.all(outturns.map(outturn => Outturn.create(outturn)));

  const outturnIds = allOutturns.map(outturn => outturn.id);

  const trackOutturns = {};
  await Promise.all(casks.map(async cask => {
    await Cask.create({
      ...cask,
      ...generateCaskInformation(),
      outturnId: outturnIds[Math.floor(Math.random() * outturnIds.length)]
    })
    .then(createdCask => {
      if(trackOutturns.hasOwnProperty(createdCask.outturnId)) trackOutturns[createdCask.outturnId]++
      else trackOutturns[createdCask.outturnId] = 0;
      createdCask.update({
        ...createdCask,
        caskPosition: trackOutturns[createdCask.outturnId]
      });
    });
  }));

  await Promise.all(users.map(async user => {
    const generateAssociatedOutturn = allOutturns[Math.floor(Math.random() * allOutturns.length)];

     await User.create(user)
       .then(createdUser => createdUser.addOutturn(generateAssociatedOutturn));
  }));
};

export default seed;