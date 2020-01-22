import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--intro-into-component-d',
  templateUrl: './intro-into-component-d.component.html',
  styleUrls: ['./intro-into-component-d.component.scss'],
})
export class IntroIntoComponentDComponent implements OnInit {
  public property01 = 'FOO';

  public property02 = 'BAR';

  public isSpanVisible = true;

  public ngOnInit() {}

  public onClick() {
    alert('CLICK');
  }
}
