import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModalComponent } from '../shared/modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item';

import { addEditModalOptions } from '../shared/modal/modal.constants';

@Component({
  selector: 'app-item-edit-container',
  templateUrl: './item-edit-container.component.html',
  styleUrls: ['./item-edit-container.component.less']
})
export class ItemEditContainerComponent implements OnInit {

  item: Item;
  modalRef: BsModalRef;

  constructor(
    private itemService: ItemsService,
    private route: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    if (!!this.itemService.item) {
      this.item = this.itemService.item;
    } else {
      this.route.navigate(['/items/all']);
    }
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent);
    this.modalRef.content.modalOptions = addEditModalOptions;
    const modal$ = this.modalRef.content.modal$;
    modal$.subscribe(data => {
      if (data) {
        this.modalRef.hide();
        this.route.navigate(['/items/all']);
      }
    });
  }

  editItem(itemInformation: Item) {
    itemInformation.id = this.item.id;
    this.itemService.updateItem(itemInformation)
      .subscribe(() => {
        this.openModal();
      });
  }

}
