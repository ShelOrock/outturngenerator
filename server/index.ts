import chalk from 'chalk';

import app from './express';
import db from './db/database';

const PORT: string | number = process.env.PORT || 3000;

db.sync()
  .then(() => {
    console.log(chalk.cyan('db synced'))
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.magentaBright(`App is listening on localhost:${ PORT }`))
    });
  })
  .catch((e: string) => {
    console.error(chalk.red('Error syncing database', e));
  })