import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-07-01',
  templateUrl: './doc-03-02-02-07-01.component.html',
})
export class Doc0302020701Component implements OnInit {
  public ngOnInit() {}

  public handleClick01() {
    alert('CLICK ME');
  }

  public handleClick02(msg: string) {
    alert(msg);
  }
}
