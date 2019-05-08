import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-05-07-04-08',
  templateUrl: './doc-05-07-04-08.component.html',
})
export class Doc05070408Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  handleClick() {
    this.router.navigateByUrl('/doc/05/07/04/08/01', {
      queryParams: {
        foo: 99,
      },
    });
  }
}