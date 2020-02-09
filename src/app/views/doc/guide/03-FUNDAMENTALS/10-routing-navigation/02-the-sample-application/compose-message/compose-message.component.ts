import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app--compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss'],
})
export class ComposeMessageComponent {
  public message: string = '';
  public sending: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public send() {
    this.sending = true;

    setTimeout(() => {
      this.sending = false;
      this.cancel();
    }, 1000);
  }

  public cancel() {
    /*
     * https://github.com/angular/angular/issues/5122#issuecomment-307521772
     */
    this.router.navigate(['.', { outlets: { popup: null } }], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}
