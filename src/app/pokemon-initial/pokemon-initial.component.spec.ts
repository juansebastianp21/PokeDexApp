import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInitialComponent } from './pokemon-initial.component';

describe('PokemonInitialComponent', () => {
  let component: PokemonInitialComponent;
  let fixture: ComponentFixture<PokemonInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
