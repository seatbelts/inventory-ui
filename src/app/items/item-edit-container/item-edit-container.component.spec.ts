import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditContainerComponent } from './item-edit-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { ItemsServiceMock } from 'src/app/tests/items.service.mock';
import { Router } from '@angular/router';
import { RouterServiceMock } from 'src/app/tests/router.service.mock';

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
});
