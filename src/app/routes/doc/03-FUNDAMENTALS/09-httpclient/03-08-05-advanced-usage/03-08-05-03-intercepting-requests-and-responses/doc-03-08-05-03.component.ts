import { Component, OnInit } from '@angular/core';
import { Doc03080503Service } from './service/doc-03-08-05-03.service';
import { Doc0308050304Service } from './service/doc-03-08-05-03-04.service';
import { tap } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-doc-03-08-05-03',
  templateUrl: './doc-03-08-05-03.component.html',
})
export class Doc03080503Component implements OnInit {
  public percent: number = 0;

  constructor(private doc03080503Service: Doc03080503Service, private doc0308050304Service: Doc0308050304Service) {}

  public ngOnInit() {}

  public request() {
    this.doc03080503Service.fetch().subscribe();
  }

  public handleChange(fileInputEl: HTMLInputElement) {
    if (fileInputEl.files && fileInputEl.files.length > 0) {
      const file = fileInputEl.files[0];
      this.doc0308050304Service
        .upload(file)
        .pipe(

          tap((httpEvent: HttpEvent<any>) => {
            if (httpEvent.type === HttpEventType.UploadProgress) {
              this.percent = Math.round(
                // tslint:disable-next-line:no-non-null-assertion
                (100 * httpEvent.loaded) / httpEvent.total!,
              );
            } else if (httpEvent.type === HttpEventType.Response) {
              this.percent = 100;
            }
          }),
        )
        .subscribe();
    }
  }
}
