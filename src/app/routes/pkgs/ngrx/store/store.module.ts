import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { StoreRoutingModule } from './store-routing.module';
import { X01Component } from './01-getting-started/x-01.component';
import { X0101Component } from './01-getting-started/01-01/x-01-01.component';
import { SharedModule } from '@shared';
import { X02Component } from './02-architecture/x-02.component';
import { X0201Component } from './02-architecture/02-01-actions/x-02-01.component';
import { X0202Component } from './02-architecture/02-02-reducers/x-02-02.component';
import { X020201Component } from './02-architecture/02-02-reducers/02-02-01/x-02-02-01.component';
import { x0202Reducer } from './02-architecture/02-02-reducers/store/reducers/02-02.reducer';
import { CountPipe } from './02-architecture/02-02-reducers/02-02-01/count.pipe';
import { X0203Component } from './02-architecture/02-03-selectors/x-02-03.component';
import { X020301Component } from './02-architecture/02-03-selectors/02-03-01/x-02-03-01.component';
import { X02030101Module } from './02-architecture/02-03-selectors/02-03-01/02-03-01-01/x-02-03-01-01.module';
import { X02030102Module } from './02-architecture/02-03-selectors/02-03-01/02-03-01-02/x-02-03-01-02.module';
import { X02030103Module } from './02-architecture/02-03-selectors/02-03-01/02-03-01-03/x-02-03-01-03.module';
import { X020302Module } from './02-architecture/02-03-selectors/02-03-02/x-02-03-02.module';
import { X020303Module } from './02-architecture/02-03-selectors/02-03-03/x-02-03-03.module';
import { X020304Module } from './02-architecture/02-03-selectors/02-03-04/x-02-03-04.module';

@NgModule({
  declarations: [
    X01Component,
    X0101Component,
    X02Component,
    X0201Component,
    X0202Component,
    X020201Component,
    X0203Component,
    X020301Component,
    [CountPipe],
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    /*
     * 通过 StoreModule.forFeature() 方法, 往全局的 store 中添加一个 feature state
     */
    NgrxStoreModule.forFeature('02-02', x0202Reducer),
    X02030101Module,
    X02030102Module,
    X02030103Module,
    X020302Module,
    X020303Module,
    X020304Module,
  ],
})
export class StoreModule {}
