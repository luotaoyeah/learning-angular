import { Component } from '@angular/core';

/*
 * 使用 @Component 装饰器将一个类标识为一个 component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'TOUR OF HEROES';
}
