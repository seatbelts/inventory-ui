import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item-add-container',
  templateUrl: './item-add-container.component.html',
  styleUrls: ['./item-add-container.component.less']
})
export class ItemAddContainerComponent implements OnInit {

  constructor(
    private itemService: ItemsService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  saveItem(itemInformation: Item) {
    this.itemService.saveNewItem(itemInformation)
      .subscribe(() => {
        this.route.navigate(['/items/all']);
      });
  }

}
