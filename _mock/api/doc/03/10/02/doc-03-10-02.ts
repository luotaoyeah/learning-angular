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

const CRISES = [
  { id: 1, name: 'DRAGON BURNING CITIES' },
  { id: 2, name: 'SKY RAINS GREAT WHITE SHARKS' },
  { id: 3, name: 'GIANT ASTEROID HEADING FOR EARTH' },
  { id: 4, name: 'PROCRASTINATORS MEETING DELAYED AGAIN' },
];

function init(app: Application) {
  app.get('/doc/03/10/02/heroes', (req: Request, res: Response) => {
    setTimeout(() => {
      res.jsonp({
        state: true,
        data: HEROES,
      });
    }, 1000);
  });

  app.get('/doc/03/10/02/heroes/:id', (req: Request, res: Response) => {
    setTimeout(() => {
      res.jsonp({
        state: true,
        data: HEROES.find(i => i.id === Number(req.params.id)),
      });
    }, 1000);
  });

  app.get('/doc/03/10/02/crises', (req: Request, res: Response) => {
    setTimeout(() => {
      res.jsonp({
        state: true,
        data: CRISES,
      });
    }, 1000);
  });

  app.get('/doc/03/10/02/crises/:id', (req: Request, res: Response) => {
    setTimeout(() => {
      res.jsonp({
        state: true,
        data: CRISES.find(i => i.id === Number(req.params.id)),
      });
    }, 1000);
  });

  app.put('/doc/03/10/02/crises/:id', (req: Request, res: Response) => {
    setTimeout(() => {
      res.jsonp({
        state: true,
        data: CRISES.find(i => i.id === Number(req.params.id)),
      });
    }, 1000);
  });
}

module.exports = { init };
