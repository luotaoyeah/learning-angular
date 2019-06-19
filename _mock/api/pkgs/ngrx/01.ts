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

  app.get('/pkgs/ngrx/entity/02/users', (req: Request, res: Response) => {
    setTimeout(() => {
      res.jsonp([
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' },
      ]);
    }, 2000);
  });
}

module.exports = { init };
