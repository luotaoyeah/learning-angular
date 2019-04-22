import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doc-03-06-09',
  templateUrl: './doc-03-06-09.component.html',
})
export class Doc030609Component implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  goto01Page() {
    this.router.navigate(['01'], {
      relativeTo: this.activatedRoute,
    });
  }

  goto02Page() {
    this.router.navigate(['02'], {
      relativeTo: this.activatedRoute,
    });
  }
}
