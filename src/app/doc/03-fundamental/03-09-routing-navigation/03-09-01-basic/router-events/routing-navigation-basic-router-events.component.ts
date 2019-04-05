import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-navigation-basic-router-events',
  templateUrl: './routing-navigation-basic-router-events.component.html',
})
export class RoutingNavigationBasicRouterEventsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    /*
     * 每次触发路由导航的时候，都会触发一系列的事件，
     * 可以通过 Router.events 对象进行订阅和监听，
     * 这些事件包括：
     *     NavigationStart
     *     RouteConfigLoadStart
     *     RouteConfigLoadEnd
     *     RoutesRecognized
     *     GuardsCheckStart
     *     ChildActivationStart
     *     ActivationStart
     *     GuardsCheckEnd
     *     ResolveStart
     *     ResolveEnd
     *     ChildActivationEnd
     *     ActivationEnd
     *     NavigationEnd
     *     NavigationCancel
     *     NavigationError
     *     Scroll
     */
    this.router.events.subscribe(() => {
      /*
            console.log(event.constructor.name);
      */
    });
  }
}
