import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormComponent } from './item-form.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormValidatorsServiceMock } from 'src/app/tests/form.validator.mock';
import { FormValidatorsService } from 'src/app/shared/form-validators.service';
import { items } from 'src/app/tests/items.data';

describe('ItemFormComponent', () => {
  let component: ItemFormComponent;
  let fixture: ComponentFixture<ItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule ],
      declarations: [ ItemFormComponent ],
      providers: [
        { provide: FormValidatorsService, useValue: FormValidatorsServiceMock },
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormComponent);
    component = fixture.componentInstance;
    component.itemInformation = items[0];
    fixture.detectChanges();
  });

});
