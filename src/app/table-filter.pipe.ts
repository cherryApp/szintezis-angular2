import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter',
  pure: false
})
export class TableFilterPipe implements PipeTransform {

  transform(value: Array<any>, key: string, phrase: string): Array<any> {
    if (!phrase) return value;
    return value.filter( (item) => {
      if (!item[key]) return false;
      return item[key].toString().toLowerCase().indexOf(
        phrase.toString().toLowerCase()
      ) > -1;
    });
  }

}
