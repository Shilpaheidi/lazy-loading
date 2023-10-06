import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponentNameComponent } from './lazy-component-name.component';

describe('LazyComponentNameComponent', () => {
  let component: LazyComponentNameComponent;
  let fixture: ComponentFixture<LazyComponentNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyComponentNameComponent]
    });
    fixture = TestBed.createComponent(LazyComponentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
