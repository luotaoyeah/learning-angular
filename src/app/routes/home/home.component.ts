import { Component } from '@angular/core';
import '@app/core/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public test() {
    API.SortingDr.sortingParameter.GetAllValues.request({
      pageIndex: 1,
    }).then(() => {});
  }
}
