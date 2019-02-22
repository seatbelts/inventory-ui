import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ItemsListContainerComponent } from './items-list-container/items-list-container.component';
import { ItemAddContainerComponent } from './item-add-container/item-add-container.component';
import { ItemEditContainerComponent } from './item-edit-container/item-edit-container.component';

const routes: Routes = [
  { path: '', component: ItemsListContainerComponent },
  { path: 'add', component: ItemAddContainerComponent },
  { path: 'edit', component: ItemEditContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ItemsRoutingModule { }
