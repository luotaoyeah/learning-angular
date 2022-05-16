import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
    selector: '[appColor]',
    standalone: true,
})
export class ColorDirective implements OnInit {
    @Input()
    public ltColor: string = 'red';

    @Output()
    public ltInit: EventEmitter<void> = new EventEmitter<void>();

    public constructor(private el: ElementRef) {}

    public ngOnInit(): void {
        this.el.nativeElement.style.color = this.ltColor;
        this.ltInit.emit();
    }
}
