import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

/**
 * http://localhost:8888/api/common/DatePipe
 */
@Component({
    selector: 'app-date-pipe',
    template: '<div></div>',
})
export class DatePipeComponent {
    public constructor() {
        const date01 = new DatePipe('en').transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0000');
        console.log('date01', date01);

        const date02 = new DatePipe('zh').transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0000');
        console.log('date02', date02);
    }
}
