import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';

import { ItemsService } from 'src/app/items/shared/items.service';

import { Item } from 'src/app/items/shared/item';
import { of, forkJoin } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../shared/modal/modal.component';
import { addEditModalOptions, deleteModalOptions } from '../shared/modal/modal.constants';

@Component({
  selector: 'app-items-list-container',
  templateUrl: './items-list-container.component.html',
  styleUrls: ['./items-list-container.component.less']
})
export class ItemsListContainerComponent implements OnInit {

  itemsList$: Observable<Item[]>;
  modalRef: BsModalRef
  itemsOptions = {
    isEditable: true,
    isDeletable: true
  };

  constructor(
    private itemsService: ItemsService,
    private route: Router,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems(): void {
    this.itemsList$ = this.itemsService.getAllItems();
  }

  onEditItem(options): void {
    if (options.edit) {
      delete options.edit;
      this.itemsService.item = options;
      this.route.navigate(['items/edit']);
    }
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent);
    this.modalRef.content.modalOptions = addEditModalOptions;
    const modal$ = this.modalRef.content.modal$;
    modal$.subscribe(data => {
      if (data) {
        this.modalRef.hide();
      }
    });
  }

  onDeleteItem(options): void {
    if (options.delete) {
      // TODO: Add delete function
      this.itemsService.removeItem(options.itemId).subscribe(items => {
        this.itemsList$ = of(items);
        this.openModal();
      });
    }
  }
}
