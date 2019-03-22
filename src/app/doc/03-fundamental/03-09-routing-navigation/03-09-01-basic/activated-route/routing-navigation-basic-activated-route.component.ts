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

    /*
     * ActivatedRoute.queryParamMap 属性，
     * 表示当前匹配的路由的查询参数
     */
    this.activatedRoute.queryParamMap.subscribe((queryParamMap: ParamMap) => {
      console.assert(queryParamMap.get('bar') === 'bar');

      /*
       * 如果某个查询参数有多个值，
       * 则使用 get() 方法获取到的是第一个值，
       * 而使用 getAll() 方法获取到的是所有值的数组
       */
      console.assert(queryParamMap.get('baz') === 'baz01');
      console.assert(queryParamMap.getAll('baz').toString() === 'baz01,baz02');
    });

    /*
     * ActivatedRoute.fragment 属性，
     * 表示 URL 地址中的 fragment 部分，如 x/y#bottom 中的 bottom
     */
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      console.assert(fragment === 'top');
    });
  }
}
