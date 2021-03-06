import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ItemAddContainerComponent } from './item-add-container.component';
import { ItemFormComponent } from '../shared/item-form/item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsService } from '../shared/items.service';
import { Router } from '@angular/router';
import { FormValidatorsService } from 'src/app/shared/form-validators.service';
import { ItemsServiceMock } from 'src/app/tests/items.service.mock';
import { Item } from '../shared/item';
import { of } from 'rxjs';
import { items } from 'src/app/tests/items.data';
import { RouterServiceMock } from 'src/app/tests/router.service.mock';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalServiceMock } from 'src/app/tests/bsmodal.service.mock';
import { BsModalRefMock } from 'src/app/tests/bsmodalref.mock';

describe('ItemAddContainerComponent', () => {
  let component: ItemAddContainerComponent;
  let fixture: ComponentFixture<ItemAddContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemAddContainerComponent
      ],
      providers: [
        { provide: Router, useValue: RouterServiceMock },
        { provide: BsModalService, useValue: BsModalServiceMock},
        { provide: ItemsService, useValue: ItemsServiceMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .overrideProvider(ItemsService, { useValue: ItemsServiceMock })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on saveItem', () => {
    it('should call saveNewItem on itemService once saveItem is called', () => {
      spyOn(component['itemService'], 'saveNewItem').and.returnValue(of({}));

      component.saveItem(items[0]);

      expect(component['itemService'].saveNewItem).toHaveBeenCalledWith(items[0]);
    });

    it('should call openModal once saveItem is done', () => {
      spyOn(component['itemService'], 'saveNewItem').and.returnValue(of({}));
      spyOn(component['modalService'], 'show').and.returnValue({
        content: {
          modal$: of(true),
          modalOptions: {}
        }
      });
      spyOn(component, 'openModal');

      component.saveItem(items[0]);

      expect(component['itemService'].saveNewItem).toHaveBeenCalledWith(items[0]);
      expect(component.openModal).toHaveBeenCalled();
    });
  });


});
