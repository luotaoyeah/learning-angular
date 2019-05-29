import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-x-01',
  templateUrl: './x-01.component.html',
  styles: [],
})
export class X01Component implements OnInit {
  constructor(private httpClient: _HttpClient) {}

  public ngOnInit() {
    this.httpClient
      .get('api/health-check')
      .subscribe((value: { data: string }) => {
        if (value.data !== 'OK') {
          console.error('JSON-SERVER IS NOT STARTED');
        }
      });
  }
}
