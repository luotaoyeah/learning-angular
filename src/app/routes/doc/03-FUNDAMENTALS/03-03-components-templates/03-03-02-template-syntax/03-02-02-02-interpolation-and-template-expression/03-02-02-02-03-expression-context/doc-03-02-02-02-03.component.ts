import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-02-03',
  templateUrl: './doc-03-02-02-02-03.component.html',
})
export class Doc0302020203Component implements OnInit {
  public heroes: Array<string> = ['DIRECTIVE HERO'];

  public hero = 'COMPONENT HERO';

  public ngOnInit() {}
}
