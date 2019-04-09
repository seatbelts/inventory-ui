import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListContainerComponent } from './items-list-container.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemsServiceMock } from 'src/app/tests/items.service.mock';
import { ItemsService } from '../shared/items.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterPipe } from '../shared/file.pipe';
import { Router } from '@angular/router';
import { RouterServiceMock } from 'src/app/tests/router.service.mock';
import { of } from 'rxjs';
import { items } from 'src/app/tests/items.data';

describe('ItemsListContainerComponent', () => {
  let component: ItemsListContainerComponent;
  let fixture: ComponentFixture<ItemsListContainerComponent>;
  const option = items[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule ],
      declarations: [
        ItemsListContainerComponent,
        FilterPipe
      ],
      providers: [
        { provide: ItemsService, useValue: ItemsServiceMock },
        { provide: Router, useValue: RouterServiceMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on ngOnInit', () => {
    it('should call getAllItems', () => {
      spyOn(component, 'getAllItems');
      component.ngOnInit();
      expect(component.getAllItems).toHaveBeenCalled();
    });
  });

  describe('on getAllItems', () => {
    it('should call getAllItems from the service', () => {
      spyOn(component['itemsService'], 'getAllItems');
      component.getAllItems();
      expect(component['itemsService'].getAllItems).toHaveBeenCalled();
    });

    it('should set itemsList$ from the service', () => {
      spyOn(component['itemsService'], 'getAllItems').and.returnValue(items);
      component.getAllItems();
      expect(component.itemsList$).toBe(items);
    });
  });

  describe('on onEditItem', () => {
    describe('on edit true', () => {

      beforeEach(() => {
        option['edit'] = true;
      })

      it('should set item on the service with the correct information', () => {
        component.onEditItem(option);
        expect(component['itemsService'].item).toBe(items[0]);
      });

      it('should navigate to item/edit', () => {
        spyOn(component['route'], 'navigate');
        component.onEditItem(option);
        expect(component['route'].navigate).toHaveBeenCalledWith(['items/edit']);
      });
    });
  });

  describe('on onDeleteItem', () => {
    describe('on delete true', () => {
      option['delete'] = true;
      option['itemId'] = option['id'];

      it('should call removeItem on the service with id', () => {
        spyOn(component['itemsService'], 'removeItem');
        component.onDeleteItem(option)
        expect(component['itemsService'].removeItem).toHaveBeenCalledWith(option.id);
      });
    });
  });
});
