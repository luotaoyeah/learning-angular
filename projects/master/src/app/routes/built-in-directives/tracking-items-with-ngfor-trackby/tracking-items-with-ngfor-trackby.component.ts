import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

/**
 * http://localhost:4200/guide/built-in-directives/tracking-items-with-ngfor-trackby
 */
@Component({
    selector: 'app-tracking-items-with-ngfor-trackby',
    templateUrl: './tracking-items-with-ngfor-trackby.component.html',
    styleUrls: ['./tracking-items-with-ngfor-trackby.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackingItemsWithNgforTrackbyComponent implements OnInit {
    public items: Array<{ id: number; name: string }> = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
    ];

    public constructor(private cdr: ChangeDetectorRef) {}

    public ngOnInit(): void {}

    /**
     * 返回要作为标识的值, 只要该值不变, 该数据对应的 DOM 元素就会被重用.
     *
     * @param index
     * @param item
     */
    public trackBy(index: number, item: { id: number; name: string }): number {
        return item.id;
    }

    public onClick() {
        this.items = [
            { id: 2, name: 'BB' },
            { id: 3, name: 'CC' },
            { id: 4, name: 'DD' },
        ];
        this.cdr.markForCheck();
    }
}
