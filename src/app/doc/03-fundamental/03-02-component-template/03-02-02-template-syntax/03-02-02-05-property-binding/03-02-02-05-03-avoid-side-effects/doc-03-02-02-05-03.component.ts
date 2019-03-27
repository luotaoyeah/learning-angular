import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-05-03',
  templateUrl: './doc-03-02-02-05-03.component.html'
})
export class Doc0302020503Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  /**
   * 该方法用于 property binding，因此不应该包含 side effects
   */
  getPicUrl(): string {
    return 'assets/images/doc-03-02-02-05.jpg';
  }
}
