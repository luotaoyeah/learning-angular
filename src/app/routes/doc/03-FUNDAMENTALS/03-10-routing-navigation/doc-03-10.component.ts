import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/*
 * https://angular.io/guide/router
 */
@Component({
  selector: 'app-doc-03-10',
  templateUrl: './doc-03-10.component.html',
})
export class Doc0310Component implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  public ngOnInit() {
    /*
     * 通过 ActivatedRoute.data 属性，可以获取到路由配置中的 data 对象
     */
    console.assert(this.activatedRoute.snapshot.data.someData === 'FOO');

    console.assert(this.activatedRoute.root === this.router.routerState.root);
  }
}
