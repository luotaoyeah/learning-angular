import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  /*
   * @Input 用来声明一个 input property，类似于 vue 里面的 props property
   */
  @Input('my-hero') hero: Hero | null = null;

  constructor() {}

  ngOnInit() {}
}
