import { Application, RequestHandler, Router } from 'express';
import { Request, Response } from 'express-serve-static-core';

const jsonServer = require('json-server');
const db = require('./db');

const app: Application = jsonServer.create();
const middlewares: Array<RequestHandler> = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);
app.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }),
);

// region 自定义的接口

/*
 * health check
 */
app.get('/health-check', (req: Request, res: Response) => {
  res.jsonp({
    data: 'OK',
  });
});

// endregion

const router: Router = jsonServer.router(db);
app.use(router);

/*
 * 启动模拟服务
 */
const port = 42002;
app.listen(port, () => {
  console.log('--------------------------------------------------');
  console.log(`json-server is running at http://localhost:${port}`);
  console.log('--------------------------------------------------');
});
