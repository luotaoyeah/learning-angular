import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/Hero';

@Component({
  selector: 'app-doc-03-03-03-01',
  templateUrl: './doc-03-03-03-01.component.html',
  styleUrls: ['./doc-03-03-03-01.component.scss'],
})
export class Doc03030301Component implements OnInit {
  powers: Array<string> = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer',
  ];

  model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() {}

  ngOnInit() {}
}
