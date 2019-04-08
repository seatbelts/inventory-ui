import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInformationComponent } from './item-information.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { items } from 'src/app/tests/items.data';
import { ReactiveFormsModule } from '@angular/forms';

describe('ItemInformationComponent', () => {
  let component: ItemInformationComponent;
  let fixture: ComponentFixture<ItemInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ItemInformationComponent ],
      providers: [],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInformationComponent);
    component = fixture.componentInstance;
    component.itemInformation = items[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
