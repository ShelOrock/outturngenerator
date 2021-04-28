import chalk from 'chalk';
import bcrypt from 'bcrypt';

import { db, User } from '../server/db/index';

const SALT_ROUNDS = 12

const productionSeed = async () => {
  await User.create({
    username: 'Shel',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    userType: 'Admin'
  })
}

db.sync({ force: true })
  .then(() => productionSeed())
  .then(() => {
    console.log(chalk.blue('new seed created successfully'));
    process.exit(0);
  })
  .catch((e: string) => {
    console.log(chalk.red('problem creating a new seed', e));
    process.exit(1);
  })