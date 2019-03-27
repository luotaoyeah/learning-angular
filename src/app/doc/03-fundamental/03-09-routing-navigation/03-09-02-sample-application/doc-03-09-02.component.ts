import { Component, OnInit } from '@angular/core';
import { routeAnimation } from './animations';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doc-03-09-02',
  templateUrl: './doc-03-09-02.component.html',
  styleUrls: ['./doc-03-09-02.component.scss'],
  animations: [routeAnimation]
})
export class Doc030902Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  getAnimationData(routerOutlet: RouterOutlet) {
    // tslint:disable-next-line:no-string-literal
    return routerOutlet && routerOutlet.activatedRouteData && routerOutlet.activatedRouteData['animation'];
  }

  /**
   * 打开 CONTACT 面板
   */
  openContact() {
    this.router.navigate([{ outlets: { popup: 'compose' } }]);
  }
}
