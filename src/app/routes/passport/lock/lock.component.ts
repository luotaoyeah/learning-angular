import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'passport-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.less'],
})
export class UserLockComponent {
  public formGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    @Inject(DA_SERVICE_TOKEN)
    private tokenService: ITokenService,
    public settingsService: SettingsService,
    private router: Router,
  ) {
    tokenService.clear();
    this.formGroup = formBuilder.group({
      password: [null, Validators.required],
    });
  }

  public submit() {
    // tslint:disable-next-line:forin
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }
    if (this.formGroup.valid) {
      console.log('Valid!');
      console.log(this.formGroup.value);
      this.tokenService.set({
        token: '123',
      });
      this.router.navigate(['home']);
    }
  }
}
