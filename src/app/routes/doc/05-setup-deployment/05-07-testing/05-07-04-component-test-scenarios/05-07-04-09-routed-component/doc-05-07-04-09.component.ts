import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-05-07-04-09',
  templateUrl: './doc-05-07-04-09.component.html',
})
export class Doc05070409Component implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit() {}

  public handleClick() {
    this.router.navigateByUrl('/doc/05/07/04/09/01', {
      queryParams: {
        foo: 99,
      },
    });
  }
}
