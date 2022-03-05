import { Component, OnInit } from '@angular/core';
import { Doc05040404Service } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-04-component-with-async-service/services/doc-05-04-04-04.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

/*
 * https://angular.io/guide/testing#component-with-async-service
 */
@Component({
  selector: 'app--doc-05-04-04-04',
  templateUrl: './doc-05-04-04-04.component.html',
})
export class Doc05040404Component implements OnInit {
  public num!: Observable<number>;
  public errorMessage: string = '';

  constructor(private doc05070404Service: Doc05040404Service) {}

  public ngOnInit(): void {
    this.getNextNum();
  }

  public getNextNum(): void {
    this.num = this.doc05070404Service.getNextNum().pipe(
      catchError((e: Error) => {
        setTimeout(() => {
          this.errorMessage = e.message;
        });
        return of(0);
      }),
    );
  }
}
