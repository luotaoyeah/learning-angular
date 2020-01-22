import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-04-01',
  templateUrl: './doc-03-02-04-01.component.html',
})
export class Doc03020401Component implements OnInit {
  public ngOnInit() {
    console.log(`[${Doc03020401Component.name}] OnInit`);
  }
}
