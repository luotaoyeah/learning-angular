import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-02-03-01',
  templateUrl: './doc-03-03-02-03-01.component.html',
})
export class Doc0303020301Component implements OnInit {
  nameFormControl: FormControl = new FormControl('');

  constructor() {}

  ngOnInit() {}
}
