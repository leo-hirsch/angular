import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[jaune]'
})
export class CouleurDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color','yellow')
  }

}
