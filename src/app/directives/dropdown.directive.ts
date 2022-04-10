import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open')  open = false;
constructor(private elementRef: ElementRef) { }
// @HostListener('click') click() {
//   this.open = !this.open; 
// }
// @HostListener('mouseleave') mouseleave() {
// this.open= false;
// }
@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  this.open = this.elementRef.nativeElement.contains(event.target) ? !this.open : false;
}
}
