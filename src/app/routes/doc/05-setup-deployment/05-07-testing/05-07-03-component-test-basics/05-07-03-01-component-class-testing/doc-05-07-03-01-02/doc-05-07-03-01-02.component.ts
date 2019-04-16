import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-05-07-03-01-02',
  templateUrl: './doc-05-07-03-01-02.component.html',
})
export class Doc0507030102Component implements OnInit {
  @Input() myInput: string = '';

  @Output() myOutput: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  click(): void {
    this.myOutput.emit(this.myInput.toUpperCase());
  }
}
