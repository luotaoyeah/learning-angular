import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss'],
})
export class ComposeMessageComponent implements OnInit {
  public message: string = '';
  public sending: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public ngOnInit() {}

  public send() {
    this.sending = true;

    setTimeout(() => {
      this.sending = false;
      this.cancel();
    }, 1000);
  }

  public cancel() {
    this.router.navigate(['./', { outlets: { popup: null } }], {
      relativeTo: this.activatedRoute,
    });
  }
}
