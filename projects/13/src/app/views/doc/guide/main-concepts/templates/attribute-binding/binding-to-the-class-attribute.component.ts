import { Component } from '@angular/core';

// https://angular.io/guide/attribute-binding#binding-to-the-class-attribute
@Component({
  selector: 'app--binding-to-the-class-attribute',
  templateUrl: './binding-to-the-class-attribute.component.html',
})
export class BindingToTheClassAttributeComponent {
  public c: string = 'c';
}
