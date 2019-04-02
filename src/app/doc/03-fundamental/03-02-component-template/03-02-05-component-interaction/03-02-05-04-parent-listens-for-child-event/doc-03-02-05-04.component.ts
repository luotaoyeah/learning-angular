import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-05-04',
  templateUrl: './doc-03-02-05-04.component.html'
})
export class Doc03020504Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleVote($event: string) {
    console.log($event);
  }
}
