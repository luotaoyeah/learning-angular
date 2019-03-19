import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes-mock';

/*
 * 使用命令 $ ng generate component <some-component> 创建一个新的 component
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  /** 当前选中的英雄 */
  selectedHero: Hero | null = null;
  /** 英雄列表 */
  heroes: Array<Hero> = HEROES;

  constructor() {}

  ngOnInit() {}

  /**
   * 选择某个英雄
   * @param hero 选择的英雄
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}