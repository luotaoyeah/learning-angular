import { Component, OnInit } from '@angular/core';
import { Doc05070404Service } from './service/doc-05-07-04-04.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-doc-05-07-04-04',
  templateUrl: './doc-05-07-04-04.component.html',
})
export class Doc05070404Component implements OnInit {
  public num!: Observable<number>;
  public errorMessage: string = '';

  constructor(private doc05070404Service: Doc05070404Service) {}

  public ngOnInit() {
    this.getNext();
  }

  public getNext = (): void => {
    this.errorMessage = '';
    this.num = this.doc05070404Service.getNext().pipe(
      catchError((e: Error) => {
        setTimeout(() => {
          this.errorMessage = e.message;
        });
        return of(0);
      }),
    );
  };
}
