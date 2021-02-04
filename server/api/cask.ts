import express, {
  Request,
  Response,
  NextFunction
} from 'express';

import { Cask } from '../db/index';

const router: express.Router = express.Router();

router.get('/:caskId', (req: Request, res: Response, next: NextFunction) => {
  Cask.findByPk(req.params.caskId)
  .then(caskOrNull => {
    if(!caskOrNull) {
      res
        .status(404)
        .send()
    } else {
      res
        .status(200)
        .send(caskOrNull)
    };
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  Cask.create({ ...req.body })
  .then(createdCask => {
    res
      .status(201)
      .send({
        createdCask,
        message: `Cask${ req.body.caskNumber ? ` ${ req.body.caskNumber }` : '' }${ req.body.name ? ` ${ req.body.name }` : '' } successfully created`
      })
  })
  .catch(e => {
      res
      .status(500)
      .send({ message: `Failed to create cask${ req.body.caskNumber ? ` ${ req.body.caskNumber }` : '' }${ req.body.name ? ` ${ req.body.name }` : '' }` })
    next(e);
  });
});

router.put('/:caskId', (req: Request, res: Response, next: NextFunction) => {
  Cask.findByPk(req.params.caskId)
  .then(caskOrNull => {
    if(!caskOrNull) {
      res
        .status(404)
        .send()
    } else {
      caskOrNull.update({
        ...req.body
      })
      .then(updatedCask => {
        res
          .status(201)
          .send(updatedCask)
      });
    };
  })
  .catch(e => {
    res
      .status(500)
      .send()
      next(e);
  })
})

router.delete('/:caskId', (req: Request, res: Response, next: NextFunction) => {
  Cask.findByPk(req.params.caskId)
  .then(caskOrNull => {
    if(!caskOrNull) {
      res
        .status(404)
        .send()
    } else {
      caskOrNull.destroy()
      .then(() => {
        res
          .status(204)
          .send('Successfully deleted record')
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

router.post('/delete-many', (req: Request, res: Response, next: NextFunction) => {
  Cask.destroy({
    where: {
      id: [ ...req.body.markedCasks ]
    }
  })
  .then(() => {
    res
      .status(200)
      .send({ message: 'Casks successfully deleted' })
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e)
  })
})

export default router;