import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-03-01',
  templateUrl: './doc-03-02-03-01.component.html',
})
export class Doc03020301Component implements OnInit {
  public ngOnInit() {}

  public handleClick(event: MouseEvent) {
    alert((event.target as HTMLButtonElement).textContent || '');
  }
}
