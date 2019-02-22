import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddContainerComponent } from './item-add-container.component';

describe('ItemAddContainerComponent', () => {
  let component: ItemAddContainerComponent;
  let fixture: ComponentFixture<ItemAddContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAddContainerComponent ]
    })
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
});
