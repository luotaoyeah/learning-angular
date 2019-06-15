import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';
import { ActivatedRoute, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  public heroes: Array<Hero> = [];
  public heroTableLoading: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private reuseTabService: ReuseTabService,
  ) {
    this.reuseTabService.title = 'HEROES';
  }

  public ngOnInit(): void {
    this.heroTableLoading = true;
    this.heroService.getHeroes().subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;
      this.heroTableLoading = false;
    });
  }

  /**
   * 跳转到英雄详情页
   * @param hero 英雄
   */
  public gotoHeroDetailPage(hero: Hero): void {
    this.router.navigate([hero.id], {
      /*
       * 通过 relativeTo 指定要相对于哪个路由进行导航
       */
      relativeTo: this.activatedRoute.parent,
    });
  }
}
