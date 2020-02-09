import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/hero/models/hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HeroService } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/hero/services/hero.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app--hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less'],
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero | null = null;
  public loading: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private heroService: HeroService) {}

  public ngOnInit() {
    /*
     * ActivatedRoute 中的属性默认都是 observable 对象,
     * 相对应的, ActivatedRoute.snapshot 对象中的属性, 都是 non-observable 对象,
     *
     * 当某个组件会被**重用**, 只是每次的路径参数不一样时,
     * 需要使用 observable 版本的对象, 因为它们可以检测到参数的变化,
     *
     * 当某个组件**不会**被重用时, 就可以使用 non-observable 版本的对象,
     * 因为 snapshot 版本的对象, 不会检测参数的变化, 只能获取到组件初次加载时的参数值
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
   * 使用 observable 版本的 paramMap,
   * 通常情况下, 我们需要在 ngOnDestroy() 中对所有的 observable 进行取消订阅,
   * 但是对于 ActivatedRoute 来说是个例外, 它里面的 observable 会自动取消订阅
   */
  public getHero$(): void {
    this.loading = true;
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
        this.loading = false;
      });
  }

  public gotoHeroListPage01(): void {
    /*
     * 使用下面这种方式生成的 URL 类似于: /hero;id=15;foo=foo,
     * 跟传统的 query string 不一样: /hero?id=15&foo=foo,
     * 这种方式称之为 matrix URL nodation
     */
    this.router.navigate(['/doc', '03', '10', '02', 'hero', { id: this.hero ? this.hero.id : '', foo: 'foo' }]);
  }

  public gotoHeroListPage02(): void {
    this.router.navigate(['/doc', '03', '10', '02', 'hero'], {
      queryParams: {
        id: this.hero ? this.hero.id : '',
        foo: 'foo',
      },
    });
  }
}
