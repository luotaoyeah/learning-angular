import { Component } from '@angular/core';
import { routeAnimation } from './animations';
import { Router, RouterOutlet } from '@angular/router';

/*
 * https://angular.io/guide/router#the-sample-application
 */
@Component({
  selector: 'app-doc-03-09-02',
  templateUrl: './doc-03-10-02.component.html',
  styleUrls: ['./doc-03-10-02.component.scss'],
  animations: [routeAnimation],
})
export class Doc031002Component {
  constructor(private router: Router) {}

  public getAnimationData(routerOutlet: RouterOutlet) {
    return (
      routerOutlet &&
      routerOutlet.activatedRouteData &&
      routerOutlet.activatedRouteData.animation
    );
  }

  /**
   * 打开 CONTACT 面板
   */
  public openContact() {
    this.router.navigate([{ outlets: { popup: 'compose' } }]);
  }
}
