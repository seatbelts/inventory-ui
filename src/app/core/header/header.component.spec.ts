import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { RouterServiceMock } from 'src/app/tests/router.service.mock';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ { provide: Router, useValue: RouterServiceMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on navigateTo', () => {
    it('should navigate to add item if given as parameter', () => {
      spyOn(component['route'], 'navigate');

      component.navigateTo('add');
      expect(component['route'].navigate).toHaveBeenCalledWith(['items/add']);
    });

    it('should navigate to all items if given as parameter', () => {
      spyOn(component['route'], 'navigate');

      component.navigateTo('all');
      expect(component['route'].navigate).toHaveBeenCalledWith(['items/all']);
    });
  });
});
