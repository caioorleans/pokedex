import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve buscar lista de pokémons e formatar nome e imagem', () => {
    const dummyResponse = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };

    service.getPokemonList(0, 2).subscribe(pokemons => {
      expect(pokemons.length).toBe(2);
      expect(pokemons[0].name).toBe('bulbasaur');
      expect(pokemons[0].image).toContain('/1.png');
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon?offset=0&limit=2');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
