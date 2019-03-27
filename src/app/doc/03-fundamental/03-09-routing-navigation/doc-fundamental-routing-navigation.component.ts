import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-navigation',
  templateUrl: './doc-fundamental-routing-navigation.component.html',
  styleUrls: ['./doc-fundamental-routing-navigation.component.scss']
})
export class DocFundamentalRoutingNavigationComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    /*
     * 通过 ActivatedRoute.data 属性，可以获取到路由配置中的 data 对象
     */
    console.assert(this.activatedRoute.snapshot.data.someData === 'FOO');

    console.assert(this.activatedRoute.root === this.router.routerState.root);
  }
}