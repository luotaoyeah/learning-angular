import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-01-04',
  templateUrl: './doc-03-02-01-04.component.html',
})
export class Doc03020104Component implements OnInit {
  public title = 'TOUR OF HEROES';
  public heroes: Array<string> = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado',
  ];
  public hero: string = this.heroes[0];

  constructor() {}

  public ngOnInit() {}
}
