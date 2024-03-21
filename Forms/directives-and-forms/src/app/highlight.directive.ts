import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //Bad way
    //this.elRef.nativeElement.style.background = 'grey';

    //Good way
    //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'green');

    this.renderer.listen(this.elRef.nativeElement, 'click', this.onClickHandler.bind(this));
    this.renderer.listen(this.elRef.nativeElement, 'mouseleave', this.onMouseLeave.bind(this));
  }

  onClickHandler(e: MouseEvent): void {
    
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'grey');
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }

  onMouseLeave(): void {
    
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial');

    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
    
  }

}
