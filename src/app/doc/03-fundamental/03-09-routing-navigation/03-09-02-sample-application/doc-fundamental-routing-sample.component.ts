import { Component, OnInit } from '@angular/core';
import { routeAnimation } from './animations';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doc-fundamental-routing-sample',
  templateUrl: './doc-fundamental-routing-sample.component.html',
  styleUrls: ['./doc-fundamental-routing-sample.component.scss'],
  animations: [routeAnimation]
})
export class DocFundamentalRoutingSampleComponent implements OnInit {
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
