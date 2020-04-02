import * as chalk from 'chalk';
import { Application } from 'express';
import * as jsonServer from 'json-server';

const app: Application = jsonServer.create();

app.use(jsonServer.defaults());
app.use(jsonServer.bodyParser);
app.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }),
);

require('./api/pkgs/ngrx/01').init(app);
require('./api/doc/03/10/02/doc-03-10-02').init(app);

const port = 3013;
app.listen(port, () => {
  console.log(chalk.greenBright(`json-server is running at http://localhost:${port}`));
});
