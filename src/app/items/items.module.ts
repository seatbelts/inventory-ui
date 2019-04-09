import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';

import { ItemsListContainerComponent } from './items-list-container/items-list-container.component';
import { ItemAddContainerComponent } from './item-add-container/item-add-container.component';
import { ItemEditContainerComponent } from './item-edit-container/item-edit-container.component';

import { ItemInformationComponent } from './shared/item-information/item-information.component';
import { ItemFormComponent } from './shared/item-form/item-form.component';

import { ItemsService } from 'src/app/items/shared/items.service';
import { FilterPipe } from './shared/file.pipe';

@NgModule({
  declarations: [
    ItemInformationComponent,
    ItemsListContainerComponent,
    ItemAddContainerComponent,
    ItemEditContainerComponent,
    ItemFormComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemsService
  ]
})
export class ItemsModule { }
