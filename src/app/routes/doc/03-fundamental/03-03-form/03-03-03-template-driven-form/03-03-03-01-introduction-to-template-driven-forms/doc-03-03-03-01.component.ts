import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../model/Hero';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-03-01',
  templateUrl: './doc-03-03-03-01.component.html',
  styleUrls: ['./doc-03-03-03-01.component.scss'],
})
export class Doc03030301Component implements OnInit {
  @ViewChild('heroForm')
  heroForm!: NgForm;

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

  addHero() {
    this.model = new Hero(20, '', '');

    /*
     * 如果需要重置表单的相关状态（ng-touched, ng-dirty, ng-invalid），
     * 需要调用 AbstractControlDirective.reset() 方法
     */
    this.heroForm.reset();
  }
}
