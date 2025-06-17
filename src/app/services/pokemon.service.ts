import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Pokemon {
  name: string;
  image: string;
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
}
