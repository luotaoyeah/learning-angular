import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-05-05',
  templateUrl: './doc-03-02-02-05-05.component.html'
})
export class Doc0302020505Component implements OnInit {
  picUrl = 'assets/images/20190328090519.jpg';

  maliciousHTML = 'FOO <script>alert("BAZ")</script> BAR';

  constructor() {}

  ngOnInit() {}
}
