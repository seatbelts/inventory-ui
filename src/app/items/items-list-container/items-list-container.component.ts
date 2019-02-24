import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';

import { ItemsService } from 'src/app/items/shared/items.service';

import { Item } from 'src/app/items/shared/item';

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

  onEditItem(options): void {
    console.log(options);
    if (options.edit) {
      this.route.navigate(['items/edit']);
    }
  }

  onDeleteItem(options): void {
    console.log(options);
    if (options.delete) {
      // TODO: Add delete function
      // this.itemsService.removeItem(options.itemId);
    }
  }

}
