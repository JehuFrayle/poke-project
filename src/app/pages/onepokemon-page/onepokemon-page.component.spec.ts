import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepokemonpageComponent } from './onepokemon-page.component';

describe('OnepokemonpageComponent', () => {
  let component: OnepokemonpageComponent;
  let fixture: ComponentFixture<OnepokemonpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnepokemonpageComponent]
    });
    fixture = TestBed.createComponent(OnepokemonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
