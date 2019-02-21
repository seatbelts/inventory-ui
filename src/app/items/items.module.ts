import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInformationComponent } from './item-information/item-information.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListContainerComponent } from './items-list-container/items-list-container.component';

@NgModule({
  declarations: [ItemInformationComponent, ItemsListContainerComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
