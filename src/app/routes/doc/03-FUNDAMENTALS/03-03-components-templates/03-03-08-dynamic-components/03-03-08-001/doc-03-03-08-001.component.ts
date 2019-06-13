import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-08-001',
  templateUrl: './doc-03-03-08-001.component.html',
})
export class Doc030308001Component implements OnInit, OnDestroy {
  public ngOnInit(): void {
    console.log(`[${Doc030308001Component.name}][ngOnInit()]`);
  }

  public ngOnDestroy(): void {
    console.log(`[${Doc030308001Component.name}][ngOnDestroy()]`);
  }
}
