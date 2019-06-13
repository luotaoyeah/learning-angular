import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-08-01',
  templateUrl: './doc-03-03-08-01.component.html',
})
export class Doc03030801Component implements OnInit, OnDestroy {
  public ngOnInit(): void {
    console.log(`[${Doc03030801Component.name}][ngOnInit()]`);
  }

  public ngOnDestroy(): void {
    console.log(`[${Doc03030801Component.name}][ngOnDestroy()]`);
  }
}
