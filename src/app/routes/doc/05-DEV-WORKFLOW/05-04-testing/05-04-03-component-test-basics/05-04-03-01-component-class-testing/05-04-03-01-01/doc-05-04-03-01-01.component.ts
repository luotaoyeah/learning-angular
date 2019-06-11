import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-05-04-03-01-01',
  templateUrl: './doc-05-04-03-01-01.component.html',
})
export class Doc0504030101Component implements OnInit {
  public isOn: boolean = false;

  get message(): string {
    return `the light is ${this.isOn ? 'ON' : 'OFF'}`;
  }

  public ngOnInit() {}

  public click(): void {
    this.isOn = !this.isOn;
  }
}
