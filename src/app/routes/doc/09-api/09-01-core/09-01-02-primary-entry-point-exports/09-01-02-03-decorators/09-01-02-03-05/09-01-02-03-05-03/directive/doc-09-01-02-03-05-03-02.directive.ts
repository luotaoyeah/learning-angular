import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appDoc09010203050302]',
})
export class Doc09010203050302Directive implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('appDoc09010203050301ChangeColor')
  public changeColor: EventEmitter<string> = new EventEmitter();

  public ngOnInit(): void {
    setTimeout(() => {
      this.changeColor.emit('#0f0');
    }, 4000);
  }
}
