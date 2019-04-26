import { Component, OnInit } from '@angular/core';
import { Doc03080502Service } from './service/doc-03-08-05-02.service';
import { Observable, of, Subject } from 'rxjs';
import { IPackageInfo } from './model/IPackageInfo';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-doc-03-08-05-02',
  templateUrl: './doc-03-08-05-02.component.html',
})
export class Doc03080502Component implements OnInit {
  public key: string = '';
  public packages$: Observable<Array<IPackageInfo>> = of([]);
  private key$: Subject<string> = new Subject<string>();

  constructor(private doc03080502Service: Doc03080502Service) {}

  ngOnInit() {
    this.packages$ = this.key$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((key: string) => this.doc03080502Service.search(key)),
    );
  }

  handleSearch(key: string) {
    if (!!key.trim()) {
      this.key$.next(key.trim());
    }
  }
}
