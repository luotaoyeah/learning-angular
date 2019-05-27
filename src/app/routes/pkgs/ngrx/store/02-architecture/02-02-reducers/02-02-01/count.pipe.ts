import { Pipe, PipeTransform } from '@angular/core';
import { IState } from '../store/state/IState';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  public transform(state: IState): number {
    return state.count;
  }
}
