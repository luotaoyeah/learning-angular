import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { StoreRoutingModule } from '@app/views/package/ngrx/store/store-routing.module';
import { SharedModule } from '@app/shared';
import { X02Component } from '@app/views/package/ngrx/store/02-architecture/x-02.component';
import { X0201Component } from '@app/views/package/ngrx/store/02-architecture/02-01-actions/x-02-01.component';
import { X0202Component } from '@app/views/package/ngrx/store/02-architecture/02-02-reducers/x-02-02.component';
import { X020201Component } from '@app/views/package/ngrx/store/02-architecture/02-02-reducers/02-02-01/x-02-02-01.component';
import { x0202Reducer } from '@app/views/package/ngrx/store/02-architecture/02-02-reducers/store/reducers/02-02.reducer';
import { CountPipe } from '@app/views/package/ngrx/store/02-architecture/02-02-reducers/02-02-01/count.pipe';
import { X0203Component } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/x-02-03.component';
import { X020301Component } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/x-02-03-01.component';
import { X02030101Module } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-01/x-02-03-01-01.module';
import { X02030102Module } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-02/x-02-03-01-02.module';
import { X02030103Module } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-03/x-02-03-01-03.module';
import { X020302Module } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-02/x-02-03-02.module';
import { X020303Module } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-03/x-02-03-03.module';
import { X020304Module } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-04/x-02-03-04.module';
import { X01Module } from '@app/views/package/ngrx/store/01-getting-started/x-01.module';
import { X03Component } from '@app/views/package/ngrx/store/03-advanced/x-03.component';
import { X0301Module } from '@app/views/package/ngrx/store/03-advanced/03-01-meta-reducer/x-03-01.module';
import { X04Component } from '@app/views/package/ngrx/store/04-recipes/x-04.component';
import { X0401Module } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/x-04-01.module';
import { X05Component } from '@app/views/package/ngrx/store/05-testing/x-05.component';
import { X0501Module } from '@app/views/package/ngrx/store/05-testing/05-01-using-a-mock-store/x-05-01.module';
import { X0502Module } from '@app/views/package/ngrx/store/05-testing/05-02-using-store-for-integration-testing/x-05-02.module';
import { X0503Module } from '@app/views/package/ngrx/store/05-testing/05-03-testing-selectors/x-05-03.module';

@NgModule({
  declarations: [
    X02Component,
    X0201Component,
    X0202Component,
    X020201Component,
    X0203Component,
    X020301Component,
    X03Component,
    X04Component,
    X05Component,
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
    X01Module,
    X02030101Module,
    X02030102Module,
    X02030103Module,
    X020302Module,
    X020303Module,
    X020304Module,
    X0301Module,
    X0401Module,
    X0501Module,
    X0502Module,
    X0503Module,
  ],
})
export class StoreModule {}
