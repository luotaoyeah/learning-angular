import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/service/hero';
import { HeroService } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/service/hero.service';

@Component({
  selector: 'app--dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  /** 热门英雄列表 */
  public heroes: Array<Hero> = [];

  constructor(private heroService: HeroService) {}

  public ngOnInit() {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes.slice(1, 5);
    });
  }
}
