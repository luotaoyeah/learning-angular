import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-into-component-d',
  templateUrl: './intro-into-component-d.component.html',
  styleUrls: ['./intro-into-component-d.component.scss'],
})
export class IntroIntoComponentDComponent implements OnInit {
  property01 = 'FOO';

  property02 = 'BAR';

  isSpanVisible = true;

  constructor() {}

  ngOnInit() {}

  onClick() {
    alert('CLICK');
  }
}
