import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-11-01',
  templateUrl: './doc-03-02-11-01.component.html',
})
export class Doc03021101Component implements OnInit {
  birthday: Date = new Date(1999, 0, 1);

  constructor() {}

  ngOnInit() {}
}
