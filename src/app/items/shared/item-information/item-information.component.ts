import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-information',
  templateUrl: './item-information.component.html',
  styleUrls: ['./item-information.component.less']
})
export class ItemInformationComponent implements OnInit {

  @Input() itemInformation: Item;
  @Input() itemOptions;
  @Output() edit: EventEmitter<object> = new EventEmitter();
  @Output() delete: EventEmitter<object> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  discountedPrice(price: number, discount: number): number {
    const offItem = (discount / 100) * price;
    return price - offItem;
  }

  editItem(): void {
    if (this.itemOptions.isEditable) {
      this.edit.emit({ edit: true, ...this.itemInformation });
    }
  }

  deleteItem(): void {
    if (this.itemOptions.isDeletable) {
      this.delete.emit({delete: true, itemId: this.itemInformation.id });
    }
  }

}
