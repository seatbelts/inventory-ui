import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ItemsService } from 'src/app/items/items.service';

import { Item } from 'src/app/items/item-information/item';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-items-list-container',
  templateUrl: './items-list-container.component.html',
  styleUrls: ['./items-list-container.component.less']
})
export class ItemsListContainerComponent implements OnInit {

  itemsList$: Observable<Item[]>;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsList$ = this.itemsService.getAllItems();
  }

}
