import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item';
import { ModalComponent } from '../shared/modal/modal.component';
import { addEditModalOptions } from '../shared/modal/modal.constants';

@Component({
  selector: 'app-item-add-container',
  templateUrl: './item-add-container.component.html',
  styleUrls: ['./item-add-container.component.less']
})
export class ItemAddContainerComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private itemService: ItemsService,
    private route: Router
  ) { }

  ngOnInit() { }

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

  saveItem(itemInformation: Item) {
    this.itemService.saveNewItem(itemInformation)
      .subscribe(() => {
        this.openModal();
      });
  }

}
