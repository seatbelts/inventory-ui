import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListContainerComponent } from './items-list-container.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemsServiceMock } from 'src/app/tests/items.service.mock';
import { ItemsService } from '../shared/items.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterPipe } from '../shared/file.pipe';
import { Router } from '@angular/router';
import { RouterServiceMock } from 'src/app/tests/router.service.mock';

describe('ItemsListContainerComponent', () => {
  let component: ItemsListContainerComponent;
  let fixture: ComponentFixture<ItemsListContainerComponent>;

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
});
