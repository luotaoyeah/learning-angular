import { Component, OnInit } from '@angular/core';
import { Crisis } from '../models/crisis';
import { ActivatedRoute, Router } from '@angular/router';
import { CrisisService } from '../services/crisis.service';
import { Observable } from 'rxjs';
import { ICanDeactivateComponent } from '../../auth/services/can-deactivate.guard';
import { CrisisDetailResolverService } from '../services/crisis-detail-resolver.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
})
export class CrisisDetailComponent implements OnInit, ICanDeactivateComponent {
  public crisis: Crisis | null = null;

  public crisisModel: Pick<Crisis, 'name'> = {
    name: '',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crisisService: CrisisService,
    public crisisDetailResolverService: CrisisDetailResolverService,
    private nzModalService: NzModalService,
  ) {}

  public ngOnInit() {
    this.activatedRoute.data.subscribe(({ crisis }) => {
      this.crisis = crisis as Crisis;
      this.crisisModel.name = this.crisis.name;
    });
  }

  public save() {
    if (this.crisis) {
      this.crisis.name = this.crisisModel.name;
      this.crisisService.updateCrisis(this.crisis).subscribe(() => {
        this.gotoCrisesPage();
      });
    } else {
      this.gotoCrisesPage();
    }
  }

  public cancel() {
    if (this.crisis) {
      this.crisisModel.name = this.crisis.name;
    }
    this.gotoCrisesPage();
  }

  private gotoCrisesPage() {
    this.router.navigate(
      ['../', { id: this.crisis ? this.crisis.id : '', foo: 'foo' }],
      {
        relativeTo: this.activatedRoute,
      },
    );
  }

  public canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.crisisModel.name) {
      return true;
    }

    return new Promise((resolve: (result: boolean) => void) => {
      this.nzModalService.confirm({
        nzTitle: '确认',
        nzContent: '确认离开?',
        nzOnOk() {
          resolve(true);
        },
        nzOnCancel() {
          resolve(false);
        },
      });
    });
  }
}
