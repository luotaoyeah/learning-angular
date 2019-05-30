import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-05-05',
  templateUrl: './doc-03-02-02-05-05.component.html',
})
export class Doc0302020505Component implements OnInit {
  public picUrl = 'assets/images/20190328090519.jpg';

  public maliciousHTML = 'FOO <script>alert("BAZ")</script> BAR';

  public ngOnInit() {}
}
