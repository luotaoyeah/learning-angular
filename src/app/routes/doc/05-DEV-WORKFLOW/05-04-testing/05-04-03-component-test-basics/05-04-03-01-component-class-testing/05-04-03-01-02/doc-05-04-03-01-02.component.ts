import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-05-04-03-01-02',
  templateUrl: './doc-05-04-03-01-02.component.html',
})
export class Doc0504030102Component implements OnInit {
  @Input()
  public myInput: string = '';

  @Output()
  public myOutput: EventEmitter<string> = new EventEmitter();

  public ngOnInit() {}

  public click(): void {
    this.myOutput.emit(this.myInput.toUpperCase());
  }
}
