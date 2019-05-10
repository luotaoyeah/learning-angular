import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-10-04',
  templateUrl: './doc-03-02-10-04.component.html',
  styles: ['.odd{color:#ff0000;}'],
})
export class Doc03021004Component implements OnInit {
  public heroes: Array<{ id: number; name: string }> = [
    { id: 1, name: 'FOO' },
    { id: 2, name: 'BAR' },
    { id: 3, name: 'BAZ' },
  ];

  constructor() {}

  public ngOnInit() {}

  public trackById(hero: { id: number; name: string }): number {
    return hero.id;
  }
}
