import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';

import { ItemInformationComponent } from './item-information/item-information.component';
import { ItemsListContainerComponent } from './items-list-container/items-list-container.component';

import { ItemsService } from 'src/app/items/items.service';

@NgModule({
  declarations: [ItemInformationComponent, ItemsListContainerComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  providers: [
    ItemsService
  ]
})
export class ItemsModule { }
