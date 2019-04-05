import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../service/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  /*
   * @Input 用来声明一个 input property，类似于 vue 里面的 props property
   */
  hero: Hero | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) {}

  ngOnInit() {
    this.getHero();
  }

  /**
   * 获取英雄
   */
  getHero(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!Number.isNaN(id)) {
      this.heroService.getHero(id).subscribe((hero: Hero) => {
        this.hero = hero;
      });
    }
  }

  /**
   * 更新英雄
   */
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => {
        this.goBack();
      });
    }
  }

  goBack() {
    this.location.back();
  }
}
