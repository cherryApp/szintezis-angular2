import { Injectable } from '@angular/core';
import { translate as trHU } from '../translate/huHU';
import { translate as trEN } from '../translate/enGB';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TranslateService {

  translate: Subject<any> = new Subject();
  lastTranslate: any;

  constructor() {
    this.selectLanguage();
    this.translate.next(this.lastTranslate);
  }

  selectLanguage(code?: string): void {
    let source: string = code || navigator.language;
    if (source == 'hu-HU') {
      this.lastTranslate = trHU;
    } else {
      this.lastTranslate = trEN;
    }
  }

  pushLanguage(code): void {
    this.selectLanguage(code);
    this.translate.next(this.lastTranslate);
  }

}
