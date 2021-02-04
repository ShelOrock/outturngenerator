import express, {
  Request,
  Response,
  NextFunction
} from 'express';

import { User } from '../db/index';

const router: express.Router = express.Router();

router.get('/:userId', (req: Request, res: Response, next: NextFunction) => {
  User.findOne({ where: { sessionId: req.params.userId } })
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

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  User.create({
    ...req.body
  })
  .then(createdUser => {
    res
      .status(201)
      .send(createdUser);
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.put('/:userId', (req: Request, res: Response, next: NextFunction) => {
  User.findByPk(req.params.userId)
  .then(userOrNull => {
    if(!userOrNull) {
      res
        .status(404)
        .send()
    } else {
      userOrNull.update({
        ...req.body
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