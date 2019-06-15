import { Component, OnInit } from '@angular/core';
import { Crisis } from '../models/crisis';
import { ActivatedRoute, Router } from '@angular/router';
import { CrisisService } from '../services/crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss'],
})
export class CrisisListComponent implements OnInit {
  public crises: Array<Crisis> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crisisService: CrisisService,
  ) {}

  public ngOnInit() {
    this.crisisService.getCrises().subscribe((crises: Array<Crisis>) => {
      this.crises = crises;
    });
  }

  public gotoCrisisDetailPage(crisis: Crisis) {
    this.router.navigate([crisis.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
