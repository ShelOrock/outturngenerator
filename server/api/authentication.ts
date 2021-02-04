import express, {
  Request,
  Response,
  NextFunction
} from 'express';

import Sequelize from 'sequelize';

import bcrypt from 'bcrypt';

import { User } from '../db/index';

const router: express.Router = express.Router();

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  const { usernameOrEmail, password } = req.body;
  User.findOne({
    where: Sequelize.or(
      { username: usernameOrEmail },
      { email: usernameOrEmail}
    )
  })
  .then(userOrNull => {
    if(!userOrNull) {
      res
        .status(404)
        .send('User not found')
    } else {
      if(userOrNull.loggedIn) {
        res
          .status(200)
          .send(userOrNull)
      } else { 
        bcrypt.compare(password, userOrNull.password)
        .then(result => {
          if(!result) {
            res
              .status(401)
              .send('Credentials incorrect')
          } else {
            User.destroy({
              where: Sequelize.and(
                { sessionId: req.session.id },
                { userType: 'guest' }
              )
            })
            .then(() => {
              userOrNull.update({
              loggedIn: true,
              sessionId: req.session.id
              })
              .then(updatedUser => {
                res
                  .status(201)
                  .send(updatedUser)
              });
            });
          };
        })
      };
    };
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.post('/logout', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
  User.findByPk(req.body.userId)
  .then(userOrNull => {
    if(!userOrNull) {
      res
        .status(404)
        .send('User not found')
    } else {
      userOrNull.update({ loggedIn: false })
      .then(() => {
        res
          .status(201)
          .send('User logged out')
      })
      .then(() => User.create({ sessionId: req.session.id }))
      .then(user => {
        res
          .status(200)
          .send(user);
      });
    };
  })
  .catch(e => {
    res
      .status(500)
      .send()
    next(e);
  });
});

export default router;