import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/service/hero';
import { HeroService } from '@app/views/doc/guide/03-FUNDAMENTALS/01-tour-of-heroes-app/service/hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app--hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  public heroes$!: Observable<Array<Hero>>;
  private searchTerms: Subject<string> = new Subject<string>();

  constructor(private heroService: HeroService) {}

  public ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  public search(value: string): void {
    this.searchTerms.next(value);
  }
}
