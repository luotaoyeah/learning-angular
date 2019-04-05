import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-10-04',
  templateUrl: './doc-03-02-02-10-04.component.html',
})
export class Doc0302021004Component implements OnInit {
  items: Array<{ label: string; value: any }> = [
    { label: 'FOO', value: 'FOO' },
    { label: 'BAR', value: 'BAR' },
    { label: 'BAZ', value: 'BAZ' },
  ];
  item: string | null = null;

  constructor() {}

  ngOnInit() {}
}
