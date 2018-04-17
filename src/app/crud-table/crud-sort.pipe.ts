import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crudSort'
})
export class CrudSortPipe implements PipeTransform {

  transform(value: any, key: string, order: number): any {
    console.log("pipe value", value);
    if (!value) return value;
    value.sort( (a, b) => {
      if (!a || !b || !a[key] || !b[key]) return 0;
      return a[key].toString().localeCompare(b[key].toString()) * order;
    });
    return value;
  }

}
