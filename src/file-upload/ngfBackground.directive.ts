import { Directive, ElementRef, Input } from '@angular/core';
import { dataUrl } from './fileTools';

@Directive({selector: '[ngfBackground]'})
export class ngfBackground {
  @Input('ngfBackground') file:any

  constructor(public ElementRef:ElementRef){}

  ngOnChanges(changes:any){
    dataUrl(this.file)
    .then((src:any)=>{
      const urlString = 'url(\'' + (src || '') + '\')'
      this.ElementRef.nativeElement.style.backgroundImage = urlString
    })
  }
}
