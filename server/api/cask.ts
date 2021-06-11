import express, {
  Request,
  Response,
  NextFunction
} from 'express';

import { Cask } from '../db/index';

import { Op } from 'sequelize';

const router: express.Router = express.Router();

router.post('/get-casks', (req: Request, res: Response, next: NextFunction): void => {
  let sortByProperty;
  let sortMethod;
  switch(req.query.sort_by) {
    case 'ascending':
      sortByProperty = 'caskNumber';
      sortMethod = 'ASC';
      break;
    case 'descending': 
      sortByProperty = 'caskNumber';
      sortMethod = 'DESC';
      break;
    case 'A-Z':
      sortByProperty = 'name';
      sortMethod = 'ASC';
      break;
    case 'Z-A':
      sortByProperty = 'name';
      sortMethod = 'DESC';
    case 'newest': 
      sortByProperty = 'createdAt';
      sortMethod = 'DESC';
      break;
    case 'oldest': 
      sortByProperty = 'createdAt';
      sortMethod = 'ASC';
      break;
    default: 
      sortByProperty = 'caskNumber';
      sortMethod = 'ASC';
      break;
  }

  Cask.findAll({
    where: {
      flavourProfile: {
        [Op.or]: req.body.filters || []
      }
    },
    order: [ 
      [ sortByProperty, sortMethod ]
    ]
  })
  .then(casksOrNull => {
    if(!casksOrNull) {
      res
        .status(404)
        .send()
    } else {
      res
        .status(200)
        .send(casksOrNull)
    };
  })
  .catch(e => {
    res
      .status(500)
      .send();
    next(e);
  })
});

router.get('/:caskId', (req: Request, res: Response, next: NextFunction): void => {
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

router.post('/create-new-cask', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
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
  if(!req.body.outturnId) req.body.outturnId = null;

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

router.post('/edit-many', (req: Request, res: Response, next: NextFunction) => {
  const reorderedCaskIds = req.body.casks.map(cask => cask.id);
  Cask.findAll({
    where: {
      id: [ ...reorderedCaskIds ]
    }
  })
  .then(casksOrNull => {
    if(!casksOrNull) {
      res
        .status(404)
        .send()
    } else {
      casksOrNull.forEach(cask => {
        cask.update({ caskPosition: reorderedCaskIds.indexOf(cask.id) })
      })
    }
  })
  .then(() => {
    res
      .status(201)
      .send()
  })
  .catch(e => {
    res
      .status(500)
      .send();
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