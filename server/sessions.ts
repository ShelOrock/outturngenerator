import express, {
    Request,
    Response,
    NextFunction
} from 'express'

import session from 'express-session';

import { User } from './db/index';

const app = express();

app.use(session({
  secret: 'meow',
  resave: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  },
}));

app.use((req: Request, res: Response, next: NextFunction) => {
  User.findOne({ where: { sessionId: req.session.id } })
  .then(userOrNull => {
    if(!userOrNull) {
      User.create({
        sessionId: req.session.id,
        userType: 'guest',
      })
      .then(user => {
        res.cookie('sessionId', user.sessionId)
        next();
      })
    } else {
      res.cookie('sessionId', userOrNull.sessionId)
      next();
    };
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

export default app;