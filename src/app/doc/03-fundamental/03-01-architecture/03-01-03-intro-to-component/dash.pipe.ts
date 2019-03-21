import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dash'
})
export class DashPipe implements PipeTransform {
  transform(value: string, separator: string = '-'): string {
    return value.split('').join(separator);
  }
}
