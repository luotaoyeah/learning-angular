import { Application } from 'express';
import { Request, Response } from 'express-serve-static-core';

function init(app: Application) {
  app.get('/pkgs/ng-alain/delon/abc/st/08', (req: Request, res: Response) => {
    setTimeout(() => {
      res.jsonp({
        items: [
          {
            id: 1,
            picture: {
              thumbnail: 'https://randomuser.me/api/portraits/thumb/men/33.jpg',
            },
            name: { last: 'last-9', first: 'first-20' },
            nat: 'CH',
            gender: 'male',
            email: 'aaa8@qq.com',
            phone: 'phone-17955',
            price: 366813,
            registered: '2019-06-19T06:04:03.471Z',
          },
          {
            id: 2,
            picture: {
              thumbnail: 'https://randomuser.me/api/portraits/thumb/men/5.jpg',
            },
            name: { last: 'last-9', first: 'first-11' },
            nat: 'US',
            gender: 'female',
            email: 'aaa7@qq.com',
            phone: 'phone-34982',
            price: 5804002,
            registered: '2019-06-19T06:04:03.471Z',
          },
          {
            id: 3,
            picture: {
              thumbnail:
                'https://randomuser.me/api/portraits/thumb/women/40.jpg',
            },
            name: { last: 'last-6', first: 'first-19' },
            nat: 'DE',
            gender: 'male',
            email: 'aaa7@qq.com',
            phone: 'phone-58513',
            price: 7018141,
            registered: '2019-06-19T06:04:03.471Z',
          },
        ],
        total: 200,
      });
    }, 2000);
  });
}

module.exports = { init };
