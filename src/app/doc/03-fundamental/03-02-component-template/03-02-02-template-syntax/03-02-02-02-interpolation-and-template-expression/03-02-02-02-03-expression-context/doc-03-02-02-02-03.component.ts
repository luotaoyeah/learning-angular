import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-02-03',
  templateUrl: './doc-03-02-02-02-03.component.html',
  styles: []
})
export class Doc0302020203Component implements OnInit {
  heroes: Array<string> = ['DIRECTIVE HERO'];

  hero = 'COMPONENT HERO';

  constructor() {}

  ngOnInit() {}
}
