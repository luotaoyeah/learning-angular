import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-01-07-01',
  templateUrl: './doc-03-03-01-07-01.component.html',
})
export class Doc0303010701Component implements OnInit {
  public colorFormControl: FormControl = new FormControl('RED');

  public ngOnInit() {}
}
