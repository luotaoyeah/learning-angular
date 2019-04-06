import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'somePipe',
})
export class SomePipePipe implements PipeTransform {
  transform(value: number, x: number, y: number): string {
    return String((value * x) / y);
  }
}
