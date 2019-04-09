import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ItemsRoutingModule } from './items-routing.module';

import { ItemsListContainerComponent } from './items-list-container/items-list-container.component';
import { ItemAddContainerComponent } from './item-add-container/item-add-container.component';
import { ItemEditContainerComponent } from './item-edit-container/item-edit-container.component';

import { ItemInformationComponent } from './shared/item-information/item-information.component';
import { ItemFormComponent } from './shared/item-form/item-form.component';

import { ItemsService } from 'src/app/items/shared/items.service';
import { FilterPipe } from './shared/file.pipe';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    ItemInformationComponent,
    ItemsListContainerComponent,
    ItemAddContainerComponent,
    ItemEditContainerComponent,
    ItemFormComponent,
    FilterPipe,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    ItemsService
  ]
})
export class ItemsModule { }
