import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-13-02',
  templateUrl: './doc-03-02-02-13-02.component.html',
})
export class Doc0302021302Component implements OnInit {
  public x: { y: { z: string } | null } | null = null;

  constructor() {}

  public ngOnInit() {}
}
