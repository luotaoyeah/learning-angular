import { MockRequest } from '@delon/mock';
import { Hero } from '../src/app/routes/doc/02-tutorial/service/hero';

/**
 * 英雄列表
 */
const heroes: Array<Hero> = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

/**
 * 获取英雄列表
 */
function gegHeroes(): Array<Hero> {
  return [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];
}

export const HEROES = {
  '/api/heroes': () => gegHeroes(),
  '/api/heroes/:id': (mockRequest: MockRequest) =>
    heroes.find(i => i.id === +mockRequest.params.id),
};
