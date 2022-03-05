import { Observable, ReplaySubject } from 'rxjs';
import { convertToParamMap, ParamMap, Params } from '@angular/router';

export class ActivatedRouteStub {
  private subject: ReplaySubject<ParamMap> = new ReplaySubject();
  public readonly queryParamMap: Observable<
    ParamMap
  > = this.subject.asObservable();

  constructor(initParams?: Params) {
    if (initParams) {
      this.setParamMap(initParams);
    }
  }

  public setParamMap(params: Params) {
    this.subject.next(convertToParamMap(params));
  }
}
