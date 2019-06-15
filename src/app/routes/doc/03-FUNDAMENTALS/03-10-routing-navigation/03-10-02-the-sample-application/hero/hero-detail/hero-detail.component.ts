import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
  ) {}

  public ngOnInit() {
    /*
     * ActivatedRoute 中的属性默认都是 observable 对象，
     * 相对应的，ActivatedRoute.snapshot 对象中的属性，都是非 observable 对象，
     * 当某个组件会被重用时，比如根据不同的 ID 访问不同英雄的详情页，
     * 此时该详情页是被重用的，只是每次的 ID 参数不一样，
     * 在这种情况下，需要使用 observable 版本的属性，因为它们可以检测到 ID 的变化，
     * 而 snapshot 版本中的属性，不能检测到 ID 的变化，只能获取到组件初次加载时的值
     */
    // this.getHero();
    this.getHero$();
  }

  /**
   * 使用 snapshot 版本的 paramMap
   */
  public getHero(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!Number.isNaN(id)) {
      this.heroService.getHero(id).subscribe((hero: Hero) => {
        this.hero = hero;
      });
    }
  }

  /**
   * 使用 observable 版本的 paramMap
   */
  public getHero$(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap: ParamMap) => {
          const id: number = Number(paramMap.get('id'));
          if (!Number.isNaN(id)) {
            return this.heroService.getHero(id);
          }

          return of(null);
        }),
      )
      .subscribe((hero: Hero | null) => {
        this.hero = hero;
      });
  }
}
