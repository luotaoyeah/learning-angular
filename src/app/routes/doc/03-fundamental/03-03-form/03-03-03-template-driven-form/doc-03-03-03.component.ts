import { Component, OnInit } from '@angular/core';
import { Hero } from './model/Hero';

@Component({
  selector: 'app-doc-03-03-03',
  templateUrl: './doc-03-03-03.component.html',
})
export class Doc030303Component implements OnInit {
  powers: Array<string> = ['P01', 'P02', 'P03', 'P04'];

  model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() {}

  ngOnInit() {}
}
