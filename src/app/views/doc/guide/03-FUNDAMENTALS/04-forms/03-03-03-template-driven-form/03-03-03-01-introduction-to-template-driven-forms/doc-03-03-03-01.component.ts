import { Component, ViewChild } from '@angular/core';
import { Hero } from '../vms/hero';
import { NgForm } from '@angular/forms';

/*
 * https://angular.io/guide/forms#introduction-to-template-driven-forms
 */
@Component({
  selector: 'app--doc-03-03-03-01',
  templateUrl: './doc-03-03-03-01.component.html',
  styleUrls: ['./doc-03-03-03-01.component.scss'],
})
export class Doc03030301Component {
  @ViewChild('heroForm', { static: true })
  public heroForm!: NgForm;

  public powers: Array<string> = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  public hero: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  public submitted: boolean = false;

  public handleSubmit() {
    this.submitted = true;
  }

  public addHero() {
    this.hero = new Hero(20, '', '');

    /*
     * 如果需要重置表单的相关状态 (ng-touched, ng-dirty, ng-invalid),
     * 需要调用 AbstractControlDirective.reset() 方法
     */
    this.heroForm.reset();
  }
}
