import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appRed]',
    standalone: true,
})
export class RedDirective {
    public constructor(private el: ElementRef) {
        this.el.nativeElement.style.color = 'red';
    }
}
