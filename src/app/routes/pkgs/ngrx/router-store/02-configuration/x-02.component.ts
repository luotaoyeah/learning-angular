import { Component, OnInit } from '@angular/core';

/*
 * https://ngrx.io/guide/router-store/configuration
 */
@Component({
  selector: 'app--x-02',
  templateUrl: './x-02.component.html',
})
export class X02Component implements OnInit {
  public foo: string | null = null;

  public ngOnInit() {}
}
