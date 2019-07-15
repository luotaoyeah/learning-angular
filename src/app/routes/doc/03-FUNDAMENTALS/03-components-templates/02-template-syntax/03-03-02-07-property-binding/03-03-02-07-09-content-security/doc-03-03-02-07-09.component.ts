import { Component } from '@angular/core';

/*
 * https://angular.io/guide/template-syntax#content-security
 */
@Component({
  selector: 'app-doc-03-03-02-07-09',
  templateUrl: './doc-03-03-02-07-09.component.html',
})
export class Doc0303020709Component {
  public maliciousHTML: string = 'FOO <script>alert("XSS")</script> BAR';
}
