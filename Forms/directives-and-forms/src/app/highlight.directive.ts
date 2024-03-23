import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {

  eventsArray: MyVoid[] = [];

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //Bad way
    //this.elRef.nativeElement.style.background = 'grey';

    //Good way
    //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'green');
    const onMouseClick = this.renderer.listen(this.elRef.nativeElement, 'click', this.onClickHandler.bind(this));
    const onMouseLeave = this.renderer.listen(this.elRef.nativeElement, 'mouseleave', this.onMouseLeave.bind(this));

    this.eventsArray.push(onMouseClick);
    this.eventsArray.push(onMouseLeave);
    
  }

  onClickHandler(e: MouseEvent): void {
    
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'grey');
    
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }

  onMouseLeave(): void {
    
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial');

    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
    
  }

  ngOnDestroy(): void {
    //console.log(this.eventsArray);

    this.eventsArray.forEach(eventFn => {
      eventFn();
    });
  }

}
