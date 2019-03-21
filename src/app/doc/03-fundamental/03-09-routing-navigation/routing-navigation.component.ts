import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-navigation',
  templateUrl: './routing-navigation.component.html',
  styleUrls: ['./routing-navigation.component.scss']
})
export class RoutingNavigationComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    /*
     * 通过 ActivatedRoute.data 属性，可以获取到路由配置中的 data 对象
     */
    console.log(this.activatedRoute.snapshot.data);
  }
}
