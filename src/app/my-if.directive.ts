import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(
    private vc: ViewContainerRef,
    private tr: TemplateRef<any>
  ) { }

  @Input() set appMyIf(condition: boolean) {
    if (condition) {
      this.vc.createEmbeddedView(this.tr);
    } else {
      this.vc.clear();
    }
  }

}
