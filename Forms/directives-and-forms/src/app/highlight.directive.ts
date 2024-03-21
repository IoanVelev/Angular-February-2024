import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //Bad way
    this.elRef.nativeElement.style.background = 'grey';

    //Good way
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'green');
    
  }

}
