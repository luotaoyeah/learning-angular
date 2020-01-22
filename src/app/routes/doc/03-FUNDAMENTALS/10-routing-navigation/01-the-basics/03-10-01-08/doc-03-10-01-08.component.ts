import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, UrlSegment } from '@angular/router';

/*
 * https://angular.io/guide/router#activated-route
 */
@Component({
  selector: 'app--doc-03-10-01-08',
  templateUrl: './doc-03-10-01-08.component.html',
})
export class Doc03100108Component implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit() {
    /*
     * ActivatedRoute.url 属性, 当前路由的 URL 片段
     */
    this.activatedRoute.url.subscribe((urlSegments: Array<UrlSegment>) => {
      console.assert(urlSegments.map(i => i.path).join('/') === '01/08/foo');
    });

    /*
     * ActivatedRoute.data 属性, 当前路由的 data 对象
     */
    this.activatedRoute.data.subscribe((data: Data) => {
      console.assert(data.foo === 'FOO');
    });

    /*
     * ActivatedRoute.paramMap 属性, 当前路由的路径参数
     */
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.assert(paramMap.get('foo') === 'foo');
    });

    /*
     * ActivatedRoute.queryParamMap 属性, 当前路由的查询参数
     */
    this.activatedRoute.queryParamMap.subscribe((queryParamMap: ParamMap) => {
      console.assert(queryParamMap.get('bar') === 'bar');

      /*
       * 如果某个查询参数有多个值,
       * 则使用 get() 方法获取到的是第一个值,
       * 而使用 getAll() 方法获取到的是所有值组成的数组
       */
      console.assert(queryParamMap.get('baz') === 'baz01');
      console.assert(queryParamMap.getAll('baz').toString() === 'baz01,baz02');
    });

    /*
     * ActivatedRoute.fragment 属性,
     * 表示 URL 地址中的 fragment 部分, 如 /x/y#bottom 中的 bottom
     */
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      console.assert(fragment === 'top');
    });

    /*
     * ActivatedRoute.outlet 属性,
     * 表示渲染当前路由的是哪一个 router-outlet ?
     * 对于未命名的 router-outlet, 该属性的值为 `primary`
     */
    console.assert(this.activatedRoute.outlet === 'primary');

    if (this.activatedRoute.routeConfig) {
      /*
       * ActivatedRoute.routeConfig 属性,
       * 表示当前路由的配置对象
       */
      console.assert(this.activatedRoute.routeConfig.path === '01/08/:foo');
      if (this.activatedRoute.routeConfig.data) {
        console.assert(this.activatedRoute.routeConfig.data.foo === 'FOO');
      }
    }

    /*
     * ActivatedRoute.parent 属性, 表示当前路由的上级路由
     */
    if (this.activatedRoute.parent && this.activatedRoute.parent.routeConfig) {
      console.assert(this.activatedRoute.parent.routeConfig.path === '03/10');
    }

    /*
     * ActivatedRoute.firstChild 属性, 表示当前路由的下级路由列表中第一个路由
     */
    console.assert(this.activatedRoute.firstChild === null);

    /*
     * ActivatedRoute.children 属性, 表示当前路由的下级路由列表
     */
    console.assert(this.activatedRoute.children.length === 0);
  }
}
