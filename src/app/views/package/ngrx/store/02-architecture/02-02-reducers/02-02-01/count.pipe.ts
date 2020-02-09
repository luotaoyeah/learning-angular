import { Pipe, PipeTransform } from '@angular/core';
import { IState } from '../store/state/i-state';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  public transform(state: IState | null): number {
    if (state) {
      return state.count;
    } else {
      return 0;
    }
  }
}
