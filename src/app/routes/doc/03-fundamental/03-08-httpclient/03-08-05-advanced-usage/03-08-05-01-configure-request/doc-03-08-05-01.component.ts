import { Component, OnInit } from '@angular/core';
import { Doc03080501Service } from './service/doc-03-08-05-01.service';

@Component({
  selector: 'app-doc-03-08-05-01',
  templateUrl: './doc-03-08-05-01.component.html',
})
export class Doc03080501Component implements OnInit {
  constructor(private doc03080501Service: Doc03080501Service) {}

  ngOnInit() {
    this.doc03080501Service.getSomething().subscribe();
  }
}
