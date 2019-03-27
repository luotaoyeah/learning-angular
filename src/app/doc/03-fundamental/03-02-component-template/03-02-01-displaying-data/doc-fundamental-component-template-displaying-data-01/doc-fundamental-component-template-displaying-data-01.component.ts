import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-fundamental-component-template-displaying-data01',
  templateUrl: './doc-fundamental-component-template-displaying-data-01.component.html',
  styleUrls: []
})
export class DocFundamentalComponentTemplateDisplayingData01Component implements OnInit {
  title = 'TOUR OF HEROES';
  myHero = 'Windstorm';

  constructor() {}

  ngOnInit() {}
}
