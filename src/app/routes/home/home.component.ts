import { Component, OnInit } from '@angular/core';
import { API, DEFS } from '@app/core/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public ngOnInit(): void {
    API.SortingPd.SortingParameterController.GetAllValues.request({}).subscribe(
      value => {
        value.data.items.forEach(item => {
          console.log(item.updateBy);
        });
      },
    );

    new DEFS.SortingPd.SortingPdWorkTask().messageType =
      'RequestWithDestination';
  }
}
