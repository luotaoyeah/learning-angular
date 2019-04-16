import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-05-07-03-01-01',
  templateUrl: './doc-05-07-03-01-01.component.html',
})
export class Doc0507030101Component implements OnInit {
  isOn: boolean = false;

  get message(): string {
    return `the light is ${this.isOn ? 'ON' : 'OFF'}`;
  }

  constructor() {}

  ngOnInit() {}

  click(): void {
    this.isOn = !this.isOn;
  }
}
