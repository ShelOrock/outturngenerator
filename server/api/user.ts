import express, {
  Request,
  Response,
  NextFunction
} from 'express';

import { User } from '../db/index';

const router: express.Router = express.Router();

router.get('/:userId', (req: Request, res: Response, next: NextFunction) => {
  User.findOne({
    where: {
      sessionId: req.params.userId
    }
  })
  .then(userOrNull => {
    if(!userOrNull) {
      res
        .status(404)
        .send()
    } else {
      res
        .status(200)
        .send(userOrNull);
    }
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.post('/get-users', (req: Request, res: Response, next: NextFunction) => {
  const userTypes = ['Admin', 'Standard', 'Unconfirmed'];
  const loggedInTypes = ['Online', 'Offline'];
  const filteruserType = userTypes.some(filter => req.body.filters.includes(filter));
  const filterLoggedIn = loggedInTypes.some(filter => req.body.filters.includes(filter));

  let sortByProperty;
  let sortMethod;

  switch(req.query.sort_by) {
    case 'A-Z':
      sortByProperty = 'username',
      sortMethod = 'ASC'
      break;
    case 'Z-A':
      sortByProperty = 'username',
      sortMethod = 'DESC'
      break;
    case 'newest':
      sortByProperty = 'createdAt',
      sortMethod = 'DESC'
      break;
    case 'oldest':
      sortByProperty = 'createdAt',
      sortMethod = 'ASC'
      break;
    default:
      sortByProperty = 'username',
      sortMethod = 'ASC'
      break;
  }

  User.findAll({
    where: {
      loggedIn: filterLoggedIn ? req.body.filters : loggedInTypes,
      userType: filteruserType ? req.body.filters : userTypes,
    },
    order: [
      [ sortByProperty, sortMethod ]
    ]
  })
  .then(users => {
    res
      .status(201)
      .send(users);
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.post('/edit/:userId', (req: Request, res: Response, next: NextFunction) => {
  User.findByPk(req.params.userId)
  .then(userOrNull => {
    if(!userOrNull) {
      res
        .status(404)
        .send()
    } else {
      userOrNull.update({
        userType: req.body.userType
      })
      .then(updatedUser => {
        res
          .status(201)
          .send(updatedUser)
      });
    };
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.delete('/:userId', (req: Request, res: Response, next: NextFunction) => {
  User.findByPk(req.params.userId)
  .then(userOrNull => {
    if(!userOrNull) {
      res
        .status(404)
        .send()
    } else {
      userOrNull.destroy()
      .then(() => {
        res
          .status(204)
          .send('Successfully deleted user')
      })
    };
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

export default router;