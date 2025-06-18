import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PokemonDetailsCardComponent } from './pokemon-details-card.component';

describe('PokemonDetailsCardComponent', () => {
  let component: PokemonDetailsCardComponent;
  let fixture: ComponentFixture<PokemonDetailsCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PokemonDetailsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
