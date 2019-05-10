import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Hero } from '../model/hero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  public heroes: Array<Hero> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
  ) {}

  public ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;
    });
  }

  /**
   * 跳转到英雄详情页
   * @param hero 英雄
   */
  public gotoHeroDetailPage(hero: Hero) {
    this.router.navigate([hero.id], {
      /*
       * 通过 relativeTo 指定要相对于哪个路由进行导航
       */
      relativeTo: this.activatedRoute,
    });
  }
}
