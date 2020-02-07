import { Component, OnInit } from '@angular/core';
import { SafeAny } from '../../../../../../../../typings';

@Component({
  selector: 'app--doc-03-02-02-10-04',
  templateUrl: './doc-03-02-02-10-04.component.html',
})
export class Doc0302021004Component implements OnInit {
  public items: Array<{ label: string; value: SafeAny }> = [
    { label: 'FOO', value: 'FOO' },
    { label: 'BAR', value: 'BAR' },
    { label: 'BAZ', value: 'BAZ' },
  ];
  public item: string | null = null;

  public ngOnInit() {}
}
