import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModuleNameComponent } from './lazy-module-name.component';

describe('LazyModuleNameComponent', () => {
  let component: LazyModuleNameComponent;
  let fixture: ComponentFixture<LazyModuleNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyModuleNameComponent]
    });
    fixture = TestBed.createComponent(LazyModuleNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
