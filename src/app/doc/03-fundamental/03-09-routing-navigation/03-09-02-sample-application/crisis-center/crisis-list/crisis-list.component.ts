import { Component, OnInit } from '@angular/core';
import { Crisis } from '../model/crisis';
import { Router } from '@angular/router';
import { CrisisService } from '../service/crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  crises: Array<Crisis> = [];

  constructor(private router: Router, private crisisService: CrisisService) {}

  ngOnInit() {
    this.crisisService.getCrises().subscribe((crises: Array<Crisis>) => {
      this.crises = crises;
    });
  }

  gotoCrisisDetailPage(crisis: Crisis) {
    this.router.navigate(['doc/fundamental/routing/sample-application/crisis-center', crisis.id]);
  }
}
