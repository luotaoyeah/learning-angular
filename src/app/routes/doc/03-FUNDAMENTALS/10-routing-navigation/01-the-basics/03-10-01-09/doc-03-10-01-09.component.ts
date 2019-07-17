import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';

/*
 * https://angular.io/guide/router#router-events
 */
@Component({
  selector: 'app-doc-03-10-01-09',
  templateUrl: './doc-03-10-01-09.component.html',
})
export class Doc03100109Component implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (this.activatedRoute.snapshot.url.map(i => i.path).join('/') === '03/10') {
        console.log(`[${Doc03100109Component.name}]\n`, event.constructor.name);
      }
    });
  }
}
