import { Component } from '@angular/core';
import { API } from '@app/core/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public test() {
    API.SortingPd.SortingParameterController.GetAllValues.request({});
  }
}
