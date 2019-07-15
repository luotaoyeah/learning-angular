import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-07-00',
  templateUrl: './doc-03-03-07-00.component.html',
})
export class Doc03030700Component implements OnInit, OnDestroy {
  public ngOnInit(): void {
    console.log(`[${Doc03030700Component.name}][ngOnInit()]`);
  }

  public ngOnDestroy(): void {
    console.log(`[${Doc03030700Component.name}][ngOnDestroy()]`);
  }
}
