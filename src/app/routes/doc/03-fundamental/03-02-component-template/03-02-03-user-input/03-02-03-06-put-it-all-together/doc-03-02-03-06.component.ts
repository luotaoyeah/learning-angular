import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-03-06',
  templateUrl: './doc-03-02-03-06.component.html',
})
export class Doc03020306Component implements OnInit {
  public heroes: Array<string> = [];

  constructor() {}

  public ngOnInit() {}

  public addHero(inputEl: HTMLInputElement) {
    if (inputEl.value) {
      this.heroes.push(inputEl.value);
      inputEl.value = '';
    }
  }
}
