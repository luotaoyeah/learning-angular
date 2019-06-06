import { Component } from '@angular/core';

@Component({
  selector: 'app-delon-abc',
  templateUrl: './delon-abc.component.html',
})
export class DelonAbcComponent {
  public isFullScreen: boolean = false;

  public handleFullScreenChange(full: boolean) {
    this.isFullScreen = full;
    console.log(`[${DelonAbcComponent.name}]\n`, this.isFullScreen);
  }
}
