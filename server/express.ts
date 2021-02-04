import
  express, {
    Request,
    Response,
    Application
} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

import sessionMiddleware from './sessions';
import apiRouter from './api/index';

import HttpError from './types/express';

const app: Application = express();

app.use(express.json());

app.use(cookieParser());

app.use('/', sessionMiddleware);

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..public/index.html'));
});

app.use('/', (err: HttpError, _req: Request, res: Response) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || 'Internal server error' })
});

export default app;