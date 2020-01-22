import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-04-05',
  templateUrl: './doc-03-02-04-05.component.html',
})
export class Doc03020405Component implements OnInit {
  public foo = '';
  public bar: { name: string } = { name: '' };

  public ngOnInit() {}

  public handleFooChange(value: string) {
    this.foo = value;
    this.bar.name = this.foo;
  }
}
