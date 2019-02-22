import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-item-information',
  templateUrl: './item-information.component.html',
  styleUrls: ['./item-information.component.less']
})
export class ItemInformationComponent implements OnInit {

  @Input() itemInformation: Item;
  @Input() itemOptions;
  @Output() editEmitter: EventEmitter<object> = new EventEmitter();
  @Output() deleteEmitter: EventEmitter<object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editItem(): void {
    if (this.itemOptions.isEditable) {
      this.editEmitter.emit({ edit: true, itemId: this.itemInformation.id });
    }
  }

  deleteItem() {
    if (this.itemOptions.isDeletable) {
      this.deleteEmitter.emit({delete: true, itemId: this.itemInformation.id });
    }
  }

}
