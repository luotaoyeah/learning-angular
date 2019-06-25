import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

/*
 * https://angular.io/guide/testing#support-more-macrotasks
 */
@Component({
  selector: 'app-doc-05-04-04-04-01',
  templateUrl: './doc-05-04-04-04-01.component.html',
})
export class Doc0504040401Component implements AfterViewInit {
  @ViewChild('canvas01', { static: false })
  public canvasElementRef!: ElementRef<HTMLCanvasElement>;

  public blobSize: number = 0;

  public ngAfterViewInit(): void {
    const context = this.canvasElementRef.nativeElement.getContext('2d');
    if (context) {
      context.clearRect(0, 0, 200, 200);
      context.fillStyle = '#000';
      context.fillRect(0, 0, 200, 200);
      this.canvasElementRef.nativeElement.toBlob((blob: Blob | null) => {
        if (blob) {
          this.blobSize = blob.size;
        }
      });
    }
  }
}
