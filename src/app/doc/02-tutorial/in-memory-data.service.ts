import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
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
      { id: 20, name: 'Tornado' }
    ];

    if (Math.random() < 0.1) {
      throw new Error('模拟请求出错');
    }

    return { heroes };
  }

  /**
   * 获取新的ID
   * @param heroes 英雄列表
   */
  getId(heroes: Array<Hero>): number {
    return heroes.length > 0 ? Math.max(...heroes.map(i => i.id)) + 1 : 11;
  }
}
