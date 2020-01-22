import { Component, OnInit } from '@angular/core';
import { Crisis } from '../models/crisis';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CrisisService } from '../services/crisis.service';
import { CrisisDetailResolverService } from '../services/crisis-detail-resolver.service';

@Component({
  selector: 'app--crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss'],
})
export class CrisisListComponent implements OnInit {
  public crises: Array<Crisis> = [];
  public crisesFetching: boolean = false;
  public selectedCrisisId: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crisisService: CrisisService,
    public crisisDetailResolverService: CrisisDetailResolverService,
  ) {}

  public ngOnInit() {
    this.crisesFetching = true;
    this.crisisService.getCrises().subscribe((crises: Array<Crisis>) => {
      this.crises = crises;
      this.crisesFetching = false;
    });

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedCrisisId = Number(params.get('id'));
    });
  }

  public gotoCrisisDetailPage(crisis: Crisis) {
    this.selectedCrisisId = crisis.id;
    this.router.navigate([crisis.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
