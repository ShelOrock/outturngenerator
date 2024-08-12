import app from './express';
import chalk from 'chalk';

const PORT = process.env.PORT || 3000;

const startServer = async (): Promise<void> => {
  try {
    await app.listen(PORT);
    console.log(chalk.blueBright(`App is listening on localhost:${ PORT }`));

  } catch(e) {
    console.log(chalk.red("Error starting server", e));
    process.exit(1);
  };
};

startServer();
