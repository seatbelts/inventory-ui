import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ItemsListContainerComponent } from './items-list-container/items-list-container.component';

const routes: Routes = [
  { path: '', component: ItemsListContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ItemsRoutingModule { }
