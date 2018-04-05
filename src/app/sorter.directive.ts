import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSorter]'
})
export class SorterDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('click', ['$event']) onclick($event) {
    console.log($event);
  }

  @Input() key: string = "";
  @Input() set appSorter(cList: any) {
    console.log(cList);
  }

}
