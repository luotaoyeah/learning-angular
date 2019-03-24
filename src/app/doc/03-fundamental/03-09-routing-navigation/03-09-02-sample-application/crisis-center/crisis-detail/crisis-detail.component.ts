import { Component, OnInit } from '@angular/core';
import { Crisis } from '../model/crisis';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CrisisService } from '../service/crisis.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis | null = null;

  constructor(private activatedRoute: ActivatedRoute, private crisisService: CrisisService) {}

  ngOnInit() {
    this.getCrisis$();
  }

  /**
   * 使用 observable 版本的 paramMap
   */
  getCrisis$(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap: ParamMap) => {
          const id: number = Number(paramMap.get('id'));
          if (!Number.isNaN(id)) {
            return this.crisisService.getCrisis(id);
          }

          return of(null);
        })
      )
      .subscribe((crisis: Crisis | null) => {
        this.crisis = crisis;
      });
  }
}
