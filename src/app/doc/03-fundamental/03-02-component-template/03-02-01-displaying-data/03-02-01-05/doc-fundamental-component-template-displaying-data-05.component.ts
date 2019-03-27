import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-doc-fundamental-component-template-displaying-data05',
  templateUrl: './doc-fundamental-component-template-displaying-data-05.component.html'
})
export class DocFundamentalComponentTemplateDisplayingData05Component implements OnInit {
  title = 'TOUR OF HEROES';
  heroes: Array<Hero> = [new Hero(1, 'Windstorm'), new Hero(13, 'Bombasto'), new Hero(15, 'Magneta'), new Hero(20, 'Tornado')];
  hero: Hero = this.heroes[0];

  constructor() {}

  ngOnInit() {}
}
