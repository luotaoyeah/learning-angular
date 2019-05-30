import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComnService } from '@app/core/comn/comn.service';

@Component({
  selector: 'app-doc-03-02-04-03-01',
  template: '<button nz-button>app-doc-03-02-04-03-01</button>',
})
export class Doc0302040301Component implements OnInit, OnDestroy {
  constructor(private comnService: ComnService) {}

  public ngOnInit() {
    console.log(
      this.comnService.getComponentLabel(Doc0302040301Component),
      'ngOnInit()',
    );
  }

  public ngOnDestroy(): void {
    console.log(
      this.comnService.getComponentLabel(Doc0302040301Component),
      'ngOnDestroy()',
    );
  }
}
