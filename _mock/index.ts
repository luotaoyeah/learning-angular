import { Application } from 'express';

const jsonServer = require('json-server');
const db = require('./db');

const app: Application = jsonServer.create();

app.use(jsonServer.defaults());
app.use(jsonServer.bodyParser);
app.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }),
);

// region 自定义的接口

require('./api/pkgs-ngrx/pkgs-ngrx').init(app);

// endregion

app.use(jsonServer.router(db));

/*
 * 启动模拟服务
 */
const port = 42002;
app.listen(port, () => {
  console.log('--------------------------------------------------');
  console.log(`json-server is running at http://localhost:${port}`);
  console.log('--------------------------------------------------');
});
