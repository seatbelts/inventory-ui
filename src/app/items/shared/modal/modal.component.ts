import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  modal$: BehaviorSubject<boolean>;
  isDelete$: BehaviorSubject<boolean>;

  delete: boolean;

  modalOptions = {
    title: '',
    descprition: '',
    confirmationText: '',
    deleteConfirm: '',
    deleteCancel: '',
    isDelete: false
  };

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.modal$ = new BehaviorSubject<boolean>(false);
    this.isDelete$ = new BehaviorSubject<boolean>(false);
  }

  closeModal(isDelete) {
    this.isDelete$.next(isDelete);
    this.modal$.next(true);
  }

}
