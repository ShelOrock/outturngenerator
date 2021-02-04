import express, {
  Request,
  Response,
  NextFunction
} from 'express';

import caskRouter from './cask';
import outturnRouter from './outturn';
import authenticationRouter from './authentication';
import userRouter from './user';

const router: express.Router = express.Router();

router.use('/cask', caskRouter);
router.use('/outturn', outturnRouter);
router.use('/authentication', authenticationRouter);
router.use('/user', userRouter);

router.use('/', (_req: Request, res: Response, next: NextFunction) => {
  const err: Error = new Error('API route not found');
  res.status(404);
  next(err);
});

export default router;