import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doc050406',
})
export class Doc050406Pipe implements PipeTransform {
  public transform(value: string): string {
    if (!value) {
      return '';
    }

    return value.toUpperCase();
  }
}
