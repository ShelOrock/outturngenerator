import chalk from 'chalk';

import {
  marchCasks,
  marchMidMonthCasks,
  aprilCasks,
  aprilMidMonthCasks,
  mayCasks,
  speysideFestivalCasks,
  campbeltownFestivalCasks,
  highlandFestivalCasks,
  islayFestivalCasks,
  juneOutturnCasks,
  outturns,
  users,
} from '.';
  
import {
  Cask,
  Outturn,
  User,
  db
} from '../../server/db'

const productionSeed = async () => {
  const allOutturns = await Promise.all(outturns.map(outturn => Outturn.create(outturn)));

  const outturnIds = allOutturns.map(outturn => outturn.id);

  await Promise.all(marchCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[0]
  })));

  await Promise.all(marchMidMonthCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[1]
  })));

  await Promise.all(aprilCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[2]
  })));

  await Promise.all(aprilMidMonthCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[3]
  })));

  await Promise.all(mayCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[4]
  })));

  await Promise.all(speysideFestivalCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[5]
  })));

  await Promise.all(campbeltownFestivalCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[6]
  })));

  await Promise.all(highlandFestivalCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[7]
  })));

  await Promise.all(islayFestivalCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[8]
  })));

  await Promise.all(juneOutturnCasks.map(cask => Cask.create({
    ...cask,
    outturnId: outturnIds[9]
  })));

  await Promise.all(users.map(user => User.create(user)));
};

db.sync({ force: true })
 .then(() => productionSeed())
 .then(() => {
   console.log(chalk.blue('new seed created successfully'));
   process.exit(0);
  })
  .catch((e: string) => {
    console.log(chalk.red('problem creating a new seed', e));
    process.exit(1);
  });