import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIconComponent } from './type-icon.component';

describe('TypeIconComponent', () => {
  let component: TypeIconComponent;
  let fixture: ComponentFixture<TypeIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeIconComponent]
    });
    fixture = TestBed.createComponent(TypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
