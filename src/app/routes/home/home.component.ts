import { Component, OnInit } from '@angular/core';
import { API } from '@app/core/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public ngOnInit(): void {
    API.SortingPd.SortingParameterController.GetAllValues.request({}).subscribe(
      () => {},
    );
  }
}
