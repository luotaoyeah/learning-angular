import { Application } from 'express';
import { Request, Response } from 'express-serve-static-core';

function init(app: Application) {
  app.get('/pkgs/ng-alain/delon/abc/st/01', (req: Request, res: Response) => {
    res.jsonp([
      {
        id: 1,
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/38.jpg',
        },
        name: { last: 'last-7', first: 'first-11' },
        nat: 'CH',
        gender: 'male',
        email: 'aaa9@qq.com',
        phone: 'phone-70918',
        price: 5213400,
        registered: '2019-06-19T01:46:06.656Z',
      },
      {
        id: 2,
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/13.jpg',
        },
        name: { last: 'last-3', first: 'first-19' },
        nat: 'US',
        gender: 'female',
        email: 'aaa4@qq.com',
        phone: 'phone-93788',
        price: 3908557,
        registered: '2019-06-19T01:46:06.656Z',
      },
    ]);
  });
}

module.exports = { init };
