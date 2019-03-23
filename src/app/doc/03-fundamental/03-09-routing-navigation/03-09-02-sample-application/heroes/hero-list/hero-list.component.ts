import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Hero } from '../model/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes: Array<Hero> = [];

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;
    });
  }

  /**
   * 跳转到英雄详情页
   * @param hero 英雄
   */
  gotoHeroDetailPage(hero: Hero) {
    this.router.navigate(['/doc/fundamental/routing/sample-application/heroes', hero.id]);
  }
}
