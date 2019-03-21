import { Component, OnInit } from '@angular/core';
import { Hero } from '../service/hero';
import { HeroService } from '../service/hero.service';

/*
 * 使用命令 $ ng generate component <some-component> 创建一个新的 component
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  /** 英雄列表 */
  heroes: Array<Hero> = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  /**
   * 获取英雄列表
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;
    });
  }

  /**
   * 添加英雄
   * @param name 英雄名称
   */
  addHero(name: string): void {
    const n = name.trim();
    if (!n) {
      return;
    }

    this.heroService.addHero({ name } as Hero).subscribe((hero: Hero) => {
      this.heroes.push(hero);
    });
  }

  /**
   * 删除英雄
   * @param hero 英雄
   */
  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(i => i !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
