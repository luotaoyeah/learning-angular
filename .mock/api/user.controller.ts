/**
 * @backend Kengic.SystemSetup.API.Controllers.UserController
 */

import { Application } from 'express';
import { Request, Response } from 'express-serve-static-core';

function init(app: Application) {
  app.post('/login', (req: Request, res: Response) => {
    const data = req.body;
    if (!['admin'].includes(data.username) || !['admin'].includes(data.password)) {
      res.jsonp({ msg: `invalid username or password` });
      return;
    }

    res.jsonp({
      state: true,
      message: '',
      data: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMDAwIiwiZW1haWwiOiJhZG1pbkBxcS5jb20iLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.aCVq3AaIehw-5x0MQJKJkxSBxISE7mINygvKll5kW-g',
        user: {
          id: '001',
          name: 'admin',
        },
        menus: [],
      },
    });
  });
}

module.exports = { init };
