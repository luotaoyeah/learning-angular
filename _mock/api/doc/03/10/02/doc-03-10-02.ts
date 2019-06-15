import { Application, Request, Response } from 'express';

const HEROES = [
  { id: 11, name: 'MR. NICE' },
  { id: 12, name: 'NARCO' },
  { id: 13, name: 'BOMBASTO' },
  { id: 14, name: 'CELERITA' },
  { id: 15, name: 'MAGNETA' },
  { id: 16, name: 'RUBBER MAN' },
  { id: 17, name: 'DYNAMA' },
  { id: 18, name: 'DR IQ' },
  { id: 19, name: 'MAGMA' },
  { id: 20, name: 'TORNADO' },
];

function init(app: Application) {
  app.get('/doc/03/10/02/heroes', (req: Request, res: Response) => {
    res.jsonp(HEROES);
  });

  app.get('/doc/03/10/02/heroes/:id', (req: Request, res: Response) => {
    res.jsonp(HEROES.find(hero => hero.id === Number(req.params.id)));
  });
}

module.exports = { init };
