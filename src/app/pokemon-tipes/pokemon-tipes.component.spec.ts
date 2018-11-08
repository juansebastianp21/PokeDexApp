import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTipesComponent } from './pokemon-tipes.component';

describe('PokemonTipesComponent', () => {
  let component: PokemonTipesComponent;
  let fixture: ComponentFixture<PokemonTipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
