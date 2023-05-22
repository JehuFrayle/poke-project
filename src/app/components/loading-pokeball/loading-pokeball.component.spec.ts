import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPokeballComponent } from './loading-pokeball.component';

describe('LoadingPokeballComponent', () => {
  let component: LoadingPokeballComponent;
  let fixture: ComponentFixture<LoadingPokeballComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingPokeballComponent]
    });
    fixture = TestBed.createComponent(LoadingPokeballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
