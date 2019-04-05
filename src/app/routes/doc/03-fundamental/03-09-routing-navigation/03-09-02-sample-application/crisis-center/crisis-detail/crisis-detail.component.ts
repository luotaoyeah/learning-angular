import { Component, OnInit } from '@angular/core';
import { Crisis } from '../model/crisis';
import { ActivatedRoute, Router } from '@angular/router';
import { CrisisService } from '../service/crisis.service';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from '../../auth/service/can-deactivate.guard';
import { DialogService } from '../../service/dialog.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
})
export class CrisisDetailComponent implements OnInit, CanDeactivateComponent {
  crisis: Crisis | null = null;

  crisisModel: Pick<Crisis, 'name'> = {
    name: '',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crisisService: CrisisService,
    private dialogService: DialogService,
  ) {}

  ngOnInit() {
    console.log(`[${CrisisDetailComponent.name}] 加载完成`);
    this.activatedRoute.data.subscribe(({ crisis }) => {
      this.crisis = crisis as Crisis;
      this.crisisModel.name = this.crisis.name;
    });
  }

  save() {
    if (this.crisis) {
      this.crisis.name = this.crisisModel.name;
      this.crisisService.updateCrisis(this.crisis).subscribe(() => {
        this.gotoCrisesPage();
      });
    } else {
      this.gotoCrisesPage();
    }
  }

  cancel() {
    if (this.crisis) {
      this.crisisModel.name = this.crisis.name;
    }
    this.gotoCrisesPage();
  }

  private gotoCrisesPage() {
    this.router.navigate([
      '/doc/fundamental/routing/sample-application/crisis-center',
    ]);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.crisisModel.name) {
      return true;
    }

    return this.dialogService.confirm('确认离开？');
  }
}
