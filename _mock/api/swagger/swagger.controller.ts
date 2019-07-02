import { Application } from 'express';
import { Request, Response } from 'express-serve-static-core';

function init(app: Application) {
  app.get('/SortingPd/swagger.json', (req: Request, res: Response) => {
    res.jsonp(require('./sorting-pd.swagger.json'));
  });

  app.get('/SortingDr/swagger.json', (req: Request, res: Response) => {
    res.jsonp(require('./sorting-dr.swagger.json'));
  });
}

module.exports = { init };
