import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc030211RoutingModule } from './doc-03-02-11-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc030211Component } from './doc-03-02-11.component';
import { Doc03021106Component } from './03-02-11-06-pure-and-impure-pipes/doc-03-02-11-06.component';
import { Doc03021103Component } from './03-02-11-03-chaining-pipes/doc-03-02-11-03.component';
import { Doc03021101Component } from './03-02-11-01-using-pipes/doc-03-02-11-01.component';
import { Doc03021104Component } from './03-02-11-04-custom-pipes/doc-03-02-11-04.component';
import { Pipe03021105Pipe } from './03-02-11-05-pipes-and-change-detection/pipe/pipe-03-02-11-05.pipe';
import { Pipe03021106Pipe } from './03-02-11-06-pure-and-impure-pipes/pipe/pipe-03-02-11-06.pipe';
import { Pipe03021102Pipe } from './03-02-11-02-parameterizing-a-pipe/pipe/pipe-03-02-11-02.pipe';
import { Doc03021105Component } from './03-02-11-05-pipes-and-change-detection/doc-03-02-11-05.component';
import { Doc03021102Component } from './03-02-11-02-parameterizing-a-pipe/doc-03-02-11-02.component';
import { Doc0302110601Component } from './03-02-11-06-pure-and-impure-pipes/03-02-11-06-01-the-impure-asyncpipe/doc-03-02-11-06-01.component';

@NgModule({
  declarations: [
    Doc030211Component,
    Doc03021101Component,
    Doc03021102Component,
    /*
     * 需要在 NgModule 的 declarations 中声明某个 pipe，
     * 之后这个 pipe 才可以在下面的 template 中使用
     */
    Pipe03021102Pipe,
    Doc03021103Component,
    Doc03021104Component,
    Doc03021105Component,
    Pipe03021105Pipe,
    Doc03021106Component,
    Pipe03021106Pipe,
    Doc0302110601Component,
  ],
  imports: [CommonModule, Doc030211RoutingModule, FormsModule, SharedModule],
})
export class Doc030211Module {}
