import { TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { of } from 'rxjs';
import { Pokemon, PokemonService } from 'src/app/services/pokemon.service';

describe('HomePage', () => {
  let component: HomePage;
  let mockPokemonService: jasmine.SpyObj<PokemonService>;

  const mockPokemonList: Pokemon[] = [
    { name: 'bulbasaur', image: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', image: 'https://pokeapi.co/api/v2/pokemon/2/' },
  ];

  beforeEach(() => {
    mockPokemonService = jasmine.createSpyObj('PokemonService', ['getPokemonList']);

    TestBed.configureTestingModule({
      providers: [
        HomePage,
        { provide: PokemonService, useValue: mockPokemonService }
      ]
    });

    component = TestBed.inject(HomePage);
  });

  it('deve carregar os pokémons com loadInitial()', () => {
    mockPokemonService.getPokemonList.and.returnValue(of(mockPokemonList));

    component.loadInitial();

    expect(mockPokemonService.getPokemonList).toHaveBeenCalledWith(0, 20);
    expect(component.pokemons()).toEqual(mockPokemonList);
  });

  it('deve carregar mais pokémons com loadMore() e acumular', () => {
  const nextBatch: Pokemon[] = Array.from({ length: 20 }, (_, i) => ({
    name: `pokemon-${i + 3}`,
    image: `https://pokeapi.co/api/v2/pokemon/${i + 3}/`
  }));

  component.pokemons.set(mockPokemonList);
  component.offset = 0;
  mockPokemonService.getPokemonList.and.returnValue(of(nextBatch));

  const event = {
    target: {
      complete: jasmine.createSpy('complete'),
      disabled: false
    }
  };

  component.loadMore(event as any);

  expect(component.offset).toBe(20);
  expect(mockPokemonService.getPokemonList).toHaveBeenCalledWith(20, 20);
  expect(component.pokemons()).toEqual([...mockPokemonList, ...nextBatch]);
  expect(event.target.complete).toHaveBeenCalled();
  expect(event.target.disabled).toBeFalse();
});

  it('deve desativar o infinite scroll se o retorno for menor que o limit', () => {
    mockPokemonService.getPokemonList.and.returnValue(of([]));

    const event = {
      target: {
        complete: jasmine.createSpy('complete'),
        disabled: false
      }
    };

    component.loadMore(event as any);

    expect(event.target.disabled).toBeTrue();
  });
});
