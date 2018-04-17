import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {
  sortKeys: any = {};
  newRow: any = {};
  lastKey: string = "";
  order: number = 1;

  @Input() rowList: Observable<any>;
  @Input() keys: Array<string>;
  @Input() serchKey: string;
  @Input() phrase: string;

  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sortRows(key): void {
    for (var k in this.sortKeys) {
      this.sortKeys[k] = "";
    }
    if (this.lastKey == key) {
      this.order *= -1;
    } else {
      this.order = 1;
    }
    this.sortKeys[key] = this.order == -1 ? 'up' : 'down';

    this.lastKey = key;
  }

  onCreate(): void {
    this.add.emit(this.newRow);
  }

  onSelect(row: any): void {
    this.update.emit(row);
  }

  onRemove(row: any): void {
    console.log(row);
    this.remove.emit(row);
  }

}
