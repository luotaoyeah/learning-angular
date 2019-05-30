import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-10-05',
  templateUrl: './doc-03-02-10-05.component.html',
})
export class Doc03021005Component implements OnInit {
  public heroes: Array<{ label: string; value: string }> = [
    { label: 'FOO', value: 'FOO' },
    { label: 'BAR', value: 'BAR' },
    { label: 'BAZ', value: 'BAZ' },
  ];
  public hero: string = this.heroes[0].value;

  public ngOnInit() {}
}
