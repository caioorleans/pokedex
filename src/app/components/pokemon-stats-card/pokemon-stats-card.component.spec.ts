import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PokemonStatsCardComponent } from './pokemon-stats-card.component';

describe('PokemonStatsCardComponent', () => {
  let component: PokemonStatsCardComponent;
  let fixture: ComponentFixture<PokemonStatsCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PokemonStatsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
