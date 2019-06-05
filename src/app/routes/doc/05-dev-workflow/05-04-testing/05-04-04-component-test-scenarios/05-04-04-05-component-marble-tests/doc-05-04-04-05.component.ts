import { Component, OnInit } from '@angular/core';
import { Doc05040405Service } from './service/doc-05-04-04-05.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-doc-05-04-04-05',
  templateUrl: './doc-05-04-04-05.component.html',
})
export class Doc05040405Component implements OnInit {
  public num!: Observable<number>;
  public errorMessage: string = '';

  constructor(private doc05070405Service: Doc05040405Service) {}

  public ngOnInit() {
    this.getNext();
  }

  public getNext = (): void => {
    this.errorMessage = '';
    this.num = this.doc05070405Service.getNext().pipe(
      catchError((e: Error) => {
        setTimeout(() => {
          this.errorMessage = e.message;
        });
        return of(0);
      }),
    );
  };
}
