import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditContainerComponent } from './item-edit-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { ItemsServiceMock } from 'src/app/tests/items.service.mock';
import { Router } from '@angular/router';
import { RouterServiceMock } from 'src/app/tests/router.service.mock';
import { of } from 'rxjs';
import { items } from 'src/app/tests/items.data';

describe('ItemEditContainerComponent', () => {
  let component: ItemEditContainerComponent;
  let fixture: ComponentFixture<ItemEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ItemEditContainerComponent ],
      providers: [
        { provide: Router, useValue: RouterServiceMock },
        { provide: ItemsService, useValue: ItemsServiceMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on ngOnInit', () => {
    it('should set component item if item on the service is defined', () => {
      component['itemService'].item = items[0];
      component.ngOnInit();
      expect(component.item).toBe(items[0]);
    });

    it('should navigate to main menu if item on the service is not defined', () => {
      component['itemService'].item = null;
      spyOn(component['route'], 'navigate');
      component.ngOnInit();
      expect(component['route'].navigate).toHaveBeenCalled();
    });
  });

  describe('on editItem', () => {
    it('should update the item with the new information', () => {
      spyOn(component['itemService'], 'updateItem').and.
        returnValue(of(items[0]));

      component['itemService'].item = items[0];
      component.ngOnInit();

      component.editItem(items[0]);
      expect(component.item).toBe(items[0]);
      expect(component['itemService'].updateItem).toHaveBeenCalledWith(items[0]);
    });

    it('should navigate to all items once saveItem is done', () => {
      spyOn(component['itemService'], 'updateItem').and.
        returnValue(of(items[0]));
      spyOn(component['route'], 'navigate');

      component['itemService'].item = items[0];
      component.ngOnInit();

      component.editItem(items[0]);
      expect(component.item).toBe(items[0]);
      expect(component['itemService'].updateItem).toHaveBeenCalledWith(items[0]);
      expect(component['route'].navigate).toHaveBeenCalled();
    });
  });
});
