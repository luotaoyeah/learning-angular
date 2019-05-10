import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-docc-03-09',
  templateUrl: './doc-03-09.component.html',
  styleUrls: ['./doc-03-09.component.scss'],
})
export class Doc0309Component implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  public ngOnInit() {
    /*
     * 通过 ActivatedRoute.data 属性，可以获取到路由配置中的 data 对象
     */
    console.assert(this.activatedRoute.snapshot.data.someData === 'FOO');

    console.assert(this.activatedRoute.root === this.router.routerState.root);
  }
}
