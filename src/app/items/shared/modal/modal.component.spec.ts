import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { BsModalServiceMock } from 'src/app/tests/bsmodal.service.mock';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalRefMock } from 'src/app/tests/bsmodalref.mock';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [
        { provide: BsModalService, useValue: BsModalServiceMock },
        { provide: BsModalRef, useValue: BsModalRefMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
