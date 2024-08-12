import chalk from 'chalk';

import createData from './data/seed';

const createSeed = async () => {
  try {
    console.log(chalk.yellowBright("Creating new seed..."));
    await createData();
    console.log(chalk.greenBright("Seed successfully created!"));

  } catch(e) {
    console.log(chalk.red("Error creating new seed", e));
    process.exit(1);
  };
};

export default createSeed;
