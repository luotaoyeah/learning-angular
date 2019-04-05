import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-03-01',
  templateUrl: './doc-03-02-02-03-01.component.html',
})
export class Doc0302020301Component implements OnInit {
  heroes: Array<string> = ['A', 'B'];

  hero = 'C';

  constructor() {}

  ngOnInit() {}

  handleClick01(mouseEvent: MouseEvent) {
    console.log(mouseEvent.altKey);
  }

  handleClick02(hero: string) {
    console.log(hero);
  }
}
