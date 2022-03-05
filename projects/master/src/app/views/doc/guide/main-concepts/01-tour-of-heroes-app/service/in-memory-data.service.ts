import { Injectable } from '@angular/core';
import { Hero } from '@app/views/doc/guide/main-concepts/01-tour-of-heroes-app/service/hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  public createDb(): Record<string, unknown> | Observable<Record<string, unknown>> | Promise<Record<string, unknown>> {
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

    const crises: Array<Hero> = [
      { id: 1, name: 'Dragon Burning Cities' },
      { id: 2, name: 'Sky Rains Great White Sharks' },
      { id: 3, name: 'Giant Asteroid Heading For Earth' },
      { id: 4, name: 'Procrastinators Meeting Delayed Again' },
    ];

    if (Math.random() < 0.01) {
      throw new Error('模拟请求出错');
    }

    return { heroes, crises };
  }

  /**
   * 获取新的ID
   * @param heroes 英雄列表
   */
  public getId(heroes: Array<Hero>): number {
    return heroes.length > 0 ? Math.max(...heroes.map((i) => i.id)) + 1 : 11;
  }
}
