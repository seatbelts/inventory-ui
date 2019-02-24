import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item-edit-container',
  templateUrl: './item-edit-container.component.html',
  styleUrls: ['./item-edit-container.component.less']
})
export class ItemEditContainerComponent implements OnInit {

  item: Item;

  constructor(
    private itemService: ItemsService,
    private route: Router
  ) { }

  ngOnInit() {
    if (!!this.itemService.item) {
      this.item = this.itemService.item;
    } else {
      this.route.navigate(['/items/all']);
    }
  }

  editItem(itemInformation: Item) {
    itemInformation.id = this.item.id;
    this.itemService.updateItem(itemInformation)
      .subscribe(() => {
        this.route.navigate(['/items/all']);
      });
  }

}
