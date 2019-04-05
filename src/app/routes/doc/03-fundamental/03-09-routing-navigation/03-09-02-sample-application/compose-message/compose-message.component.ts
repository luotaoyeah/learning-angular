import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss'],
})
export class ComposeMessageComponent implements OnInit {
  message = '';
  sending = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  send() {
    this.sending = true;

    setTimeout(() => {
      this.sending = false;
      this.cancel();
    }, 1000);
  }

  cancel() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
