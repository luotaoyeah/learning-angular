import { Directive, HostListener } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Directive({
  selector: '[appDoc0901020308]',
})
export class Doc0901020308Directive {
  constructor(private nzMessageService: NzMessageService) {}

  @HostListener('click', ['$event'])
  public handleClick(e: MouseEvent) {
    e.stopPropagation();
    this.nzMessageService.info(`[${Doc0901020308Directive.name}]\nCLICK`);
  }
}
