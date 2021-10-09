import express, {
    Request,
    Response,
    NextFunction
} from 'express'

import session from 'express-session';

import { User } from './db/index';

if(process.env.NODE !== 'production') {
  require('dotenv').config();
};

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  },
}));

app.use((req: Request, res: Response, next: NextFunction) => {
  User.findOne({ where: { sessionId: req.session.id } })
  .then(userOrNull => {
    if(!userOrNull) {
      User.create({
        sessionId: req.session.id,
        userType: 'Guest',
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