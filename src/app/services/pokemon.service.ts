import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Pokemon {
  name: string;
  image: string;
}

export interface PokemonDetails {
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
  stats: { base_stat: number; stat: { name: string } }[];
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
}

export interface PokemonSpecies {
  flavor_text_entries: Array<{
    flavor_text: string;
    language: { name: string };
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(offset = 0, limit = 20): Observable<Pokemon[]> {
    return this.http.get<{ results: { name: string; url: string }[] }>(
      `${this.baseUrl}?offset=${offset}&limit=${limit}`
    ).pipe(
      map(response =>
        response.results.map(pokemon => {
          const id = pokemon.url.split('/').filter(Boolean).pop();
          return {
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        })
      )
    );
  }

  getPokemonByName(name: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.baseUrl}/${name}`);
  }

  getPokemonSpecies(name: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`${this.baseUrl}-species/${name}`);
  }
}
