import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-02-03',
  templateUrl: './doc-03-02-02-03.component.html',
})
export class Doc03020203Component implements OnInit {
  public i = 1;

  public ngOnInit() {}

  public handleClick01() {
    alert('CLICK ME');
  }
}
