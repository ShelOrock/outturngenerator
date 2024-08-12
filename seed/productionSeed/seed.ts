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
  
import { connection, Models } from '../../server/database'

const productionSeed = async () => {
  const allOutturns = await Promise.all(outturns.map(outturn => Models.Outturn.create(outturn)));

  const outturnIds = allOutturns.map(outturn => outturn.id);

  await Promise.all(marchCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[0]
  })));

  await Promise.all(marchMidMonthCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[1]
  })));

  await Promise.all(aprilCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[2]
  })));

  await Promise.all(aprilMidMonthCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[3]
  })));

  await Promise.all(mayCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[4]
  })));

  await Promise.all(speysideFestivalCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[5]
  })));

  await Promise.all(campbeltownFestivalCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[6]
  })));

  await Promise.all(highlandFestivalCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[7]
  })));

  await Promise.all(islayFestivalCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[8]
  })));

  await Promise.all(juneOutturnCasks.map((cask, idx) => Models.Cask.create({
    ...cask,
    caskPosition: idx,
    outturnId: outturnIds[9]
  })));

  await Promise.all(users.map(user => Models.User.create(user)));
};

connection.sync({ force: true })
 .then(() => productionSeed())
 .then(() => {
   console.log(chalk.blue('new seed created successfully'));
   process.exit(0);
  })
  .catch((e: string) => {
    console.log(chalk.red('problem creating a new seed', e));
    process.exit(1);
  });