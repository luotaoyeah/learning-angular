import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

/**
 * http://localhost:8888/guide/built-in-directives/tracking-items-with-ngfor-trackby
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

    public item01 = { id: 1, name: 'A' };
    public item02 = { id: 2, name: 'B' };
    public item03 = { id: 3, name: 'C' };

    public items02: Array<{ id: number; name: string }> = [this.item01, this.item02, this.item03];

    public constructor(private cdr: ChangeDetectorRef) {}

    public ngOnInit(): void {}

    public onClick() {
        this.items = [
            { id: 2, name: 'BB' },
            { id: 3, name: 'CC' },
            { id: 4, name: 'DD' },
        ];
        this.cdr.markForCheck();
    }

    /**
     * 没有指定 trackBy 时, trackBy 的默认值为该对象的引用.
     * 实际上是使用 Object.is() 来判断是否有变更.
     */
    public onClick02() {
        this.items02 = [this.item02, this.item03, { id: 4, name: 'DD' }];
        this.cdr.markForCheck();
    }

    /**
     * 返回要作为唯一标识的值, 只要该值不变, 该数据对应的 DOM 元素就会被重用.
     *
     * @param index
     * @param item
     */
    public trackBy(index: number, item: { id: number; name: string }): number {
        return item.id;
    }
}
