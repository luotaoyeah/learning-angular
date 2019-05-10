import { Directive, ElementRef, Inject, InjectionToken } from '@angular/core';

export const TOKEN = new InjectionToken<{ getColor(): string }>('token');

@Directive({
  selector: '[appDoc09010203050401]',
  providers: [
    {
      provide: TOKEN,
      useValue: {
        getColor(): string {
          return '#f00';
        },
      },
    },
  ],
})
export class Doc09010203050401Directive {
  constructor(
    @Inject(TOKEN)
    protected token: { getColor(): string },
    elementRef: ElementRef<HTMLButtonElement>,
  ) {
    elementRef.nativeElement.style.color = token.getColor();
  }
}
