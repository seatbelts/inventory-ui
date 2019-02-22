import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';

import { ItemInformationComponent } from './item-information/item-information.component';
import { ItemsListContainerComponent } from './items-list-container/items-list-container.component';

import { ItemsService } from 'src/app/items/items.service';
import { ItemAddContainerComponent } from './item-add-container/item-add-container.component';
import { ItemEditContainerComponent } from './item-edit-container/item-edit-container.component';

@NgModule({
  declarations: [ItemInformationComponent, ItemsListContainerComponent, ItemAddContainerComponent, ItemEditContainerComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  providers: [
    ItemsService
  ]
})
export class ItemsModule { }
