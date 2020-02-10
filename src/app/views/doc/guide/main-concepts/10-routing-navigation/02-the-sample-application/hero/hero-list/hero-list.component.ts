import { Component, OnInit } from '@angular/core';
import { HeroService } from '@app/views/doc/guide/main-concepts/10-routing-navigation/02-the-sample-application/hero/services/hero.service';
import { Hero } from '@app/views/doc/guide/main-concepts/10-routing-navigation/02-the-sample-application/hero/models/hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app--hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  public heroes: Array<Hero> = [];
  public heroTableLoading: boolean = false;
  public selectedHeroId: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private heroService: HeroService) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedHeroId = Number(params.get('id'));

      this.heroTableLoading = true;
      this.heroService.getHeroes().subscribe((heroes: Array<Hero>) => {
        this.heroes = heroes;
        this.heroTableLoading = false;
      });
    });
  }

  public gotoHeroDetailPage(hero: Hero): void {
    this.router.navigate([hero.id], {
      /*
       * 通过 relativeTo 指定要相对于哪个路由进行导航
       */
      relativeTo: this.activatedRoute.parent,
    });
  }
}
