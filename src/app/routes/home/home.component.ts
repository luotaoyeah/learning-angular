import { Component } from '@angular/core';
import { API } from '@app/core/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public test() {
    API.SortingDr.SortingParameter.GetAllValues.request({
      pageIndex: 1,
    });
  }
}
