import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss'],
})
export class ComposeMessageComponent implements OnInit {
  public message = '';
  public sending = false;

  constructor(private router: Router) {}

  public ngOnInit() {}

  public send() {
    this.sending = true;

    setTimeout(() => {
      this.sending = false;
      this.cancel();
    }, 1000);
  }

  public cancel() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
