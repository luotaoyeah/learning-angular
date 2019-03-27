import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-fundamental-component-template-displaying-data',
  templateUrl: './doc-fundamental-component-template-displaying-data.component.html',
  styleUrls: ['./doc-fundamental-component-template-displaying-data.component.scss']
})
export class DocFundamentalComponentTemplateDisplayingDataComponent implements OnInit {
  title = 'TOUR OF HEROES';
  myHero = 'Windstorm';

  constructor() {}

  ngOnInit() {}
}
