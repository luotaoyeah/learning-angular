import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-fundamental-component-template-displaying-data04',
  templateUrl: './doc-fundamental-component-template-displaying-data-04.component.html'
})
export class DocFundamentalComponentTemplateDisplayingData04Component implements OnInit {
  title = 'TOUR OF HEROES';
  heroes: Array<string> = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  hero: string = this.heroes[0];

  constructor() {}

  ngOnInit() {}
}
