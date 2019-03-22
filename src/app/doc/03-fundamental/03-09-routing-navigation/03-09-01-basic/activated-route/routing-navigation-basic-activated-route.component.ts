import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-routing-navigation-basic-activated-route',
  templateUrl: './routing-navigation-basic-activated-route.component.html',
  styleUrls: []
})
export class RoutingNavigationBasicActivatedRouteComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    /*
     * ActivatedRoute.url 属性，
     * 表示当前匹配的路由的 URL 片段
     */
    this.activatedRoute.url.subscribe((urlSegments: Array<UrlSegment>) => {
      console.assert(urlSegments[0].path === 'routing-navigation');
    });

    /*
     * ActivatedRoute.data 属性，
     * 表示当前匹配的路由的 data 对象
     */
    this.activatedRoute.data.subscribe((data: Data) => {
      console.assert(data.someData === 'FOO');
    });

    /*
     * ActivatedRoute.paramMap 属性，
     * 表示当前匹配的路由的路径参数
     */
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.assert(paramMap.get('foo') === 'foo');
    });
  }
}
