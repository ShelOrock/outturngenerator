import chalk from 'chalk';

import seed from './data/seed';
import { db } from '../server/db/index';

db.sync({ force: true })
  .then(() => seed())
  .then(() => {
    console.log(chalk.blue('new seed created successfully'));
    process.exit(0);
  })
  .catch((e: string) => {
    console.log(chalk.red('problem creating a new seed', e));
    process.exit(1);
  })