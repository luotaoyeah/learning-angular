import { Application } from 'express';
import { Request, Response } from 'express-serve-static-core';

function init(app: Application) {
  app.get('/pkgs/ngrx/effects/01/movies', (req: Request, res: Response) => {
    res.jsonp([
      { id: 1, name: '复仇者联盟' },
      { id: 2, name: '流浪地球' },
      { id: 3, name: '第六感生死缘' },
    ]);
  });
}

module.exports = { init };
