import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';

import { ItemsService } from 'src/app/items/items.service';

import { Item } from 'src/app/items/item-information/item';

@Component({
  selector: 'app-items-list-container',
  templateUrl: './items-list-container.component.html',
  styleUrls: ['./items-list-container.component.less']
})
export class ItemsListContainerComponent implements OnInit {

  itemsList$: Observable<Item[]>;
  itemsOptions = {
    isEditable: true,
    isDeletable: true
  };

  constructor(
    private itemsService: ItemsService,
    private route: Router
    ) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems(): void {
    this.itemsList$ = this.itemsService.getAllItems();
  }

  editItem(options) {
    console.log(options);
    if (options.edit) {
      this.route.navigate(['items/edit']);
    }
  }

  deleteItem(options) {
    console.log(options);
    if (options.delete) {
      console.log('delete');
      // this.itemsService.removeItem(options.itemId);
    }
  }

}
