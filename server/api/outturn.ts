import express, {
  Request,
  Response,
  NextFunction
} from 'express';

import { Outturn, Cask } from '../db/index';

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  let sortByProperty;
  let sortMethod;
  switch(req.query.sort_by) {
    case 'newest': 
      sortByProperty = 'updatedAt',
      sortMethod = 'DESC'
      break;
    case 'oldest': 
      sortByProperty = 'updatedAt',
      sortMethod = 'ASC'
      break;
    default: 
      sortByProperty = 'updatedAt',
      sortMethod = 'DESC'
      break;
  }
  Outturn.findAll({
    order: [
      [ sortByProperty, sortMethod ]
    ],
    include: [{
      model: Cask
    }],
  })
  .then(outturnsOrNull => {
    if(!outturnsOrNull) {
      res
        .status(404)
        .send()
    } else {
      res
        .status(200)
        .send(outturnsOrNull);
    }
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.get('/:outturnId', (req: Request, res: Response, next: NextFunction) => {
  Outturn.findByPk(req.params.outturnId, 
    {
      include: [{
        model: Cask,
      }],
      order: [
        [ Cask, 'caskPosition', 'ASC' ],
      ]
    })
  .then(outturnOrNull => {
    if(!outturnOrNull) {
      res
        .status(404)
        .send();
    } else {
      res
        .status(200)
        .send(outturnOrNull);
      }
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  console.log({ body: req.body })
  Outturn.create({
    ...req.body
  })
  .then(createdOutturn => {
    res
      .status(201)
      .send(createdOutturn)
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  });
});

router.put('/:outturnId', (req: Request, res: Response, next: NextFunction) => {
  Outturn.findByPk(req.params.outturnId)
  .then(outturnOrNull => {
    if(!outturnOrNull) {
      res
        .status(404)
        .send()
    } else {
      outturnOrNull.update({
        ...req.body
      })
      .then(updatedOutturn => {
        res
          .status(201)
          .send(updatedOutturn)
      });
    };
  })
  .catch(e => {
    res
      .status(500)
      .send();
      next(e);
  })
})

router.delete('/:outturnId', (req: Request, res: Response, next: NextFunction) => {
  Cask.findAll({
    where: {
      outturnId: req.params.outturnId
    }
  })
  .then(casksOrEmpty => {
    if(casksOrEmpty.length) {
      casksOrEmpty.map(async casks => await casks.destroy())
    }
  })
  .then(() => {
    Outturn.findByPk(req.params.outturnId)
    .then(outturnOrNull => {
      if(!outturnOrNull) {
        res
          .status(404)
          .send()
      } else {
        outturnOrNull.destroy()
        .then(() => {
          res
            .status(204)
            .send('Successfully deleted outturn')
        });
      };
    });
  })
  .catch(e => {
    res
      .status(500)
      .send();
      next(e);
  })
})

router.post('/delete-many', (req: Request, res: Response, next: NextFunction) => {
  Cask.findAll({
    where: {
      outturnId: [ ...req.body.markedOutturns ]
    }
  })
  .then(casksOrEmpty => {
    if(casksOrEmpty.length) {
      casksOrEmpty.map(async casks => await casks.destroy())
    }
  })
  .then(() => {
    Outturn.destroy({
      where: {
        id: [ ...req.body.markedOutturns ]
      }
    })
    .then(() => {
      res
        .status(204)
        .send()
    })
    .catch(e => {
      res
        .status(500)
        .send();
      next(e);
    })
  })
})

export default router;