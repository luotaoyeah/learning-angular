import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | null = null;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService) {}

  ngOnInit() {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!Number.isNaN(id)) {
      this.heroService.getHero(id).subscribe((hero: Hero) => {
        this.hero = hero;
      });
    }
  }
}
