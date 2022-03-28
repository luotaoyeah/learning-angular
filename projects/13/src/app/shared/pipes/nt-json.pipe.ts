import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ntJson',
})
export class NtJsonPipe implements PipeTransform {
  public transform(value: Record<string, unknown>): string {
    return JSON.stringify(value, null, 2);
  }
}
