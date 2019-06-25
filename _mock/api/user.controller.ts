/**
 * @backend Kengic.SystemSetup.API.Controllers.UserController
 */

import { Application } from 'express';
import { Request, Response } from 'express-serve-static-core';

function init(app: Application) {
  app.post('/login/account', (req: Request, res: Response) => {
    const data = req.body;
    if (
      !['admin'].includes(data.username) ||
      !['admin'].includes(data.password)
    ) {
      res.jsonp({ msg: `invalid username or password（admin/admin）` });
      return;
    }

    res.jsonp({
      user: {
        token: '123456789',
        name: data.username,
        email: `${data.username}@qq.com`,
        id: 10000,
        time: +new Date(),
      },
    });
  });
}

module.exports = { init };
