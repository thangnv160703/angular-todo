import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('');
  }

  constructor(private el: ElementRef) { }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
