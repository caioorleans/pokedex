import { Injectable, signal, WritableSignal } from '@angular/core';
import { Pokemon,} from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  key = 'favorites';
  private favoritesSignal: WritableSignal<Pokemon[]> = signal(this.getFavorites());

  constructor() { }

  addToFavorites(pokemon: Pokemon): void {
    const favorites = this.getFavorites();
    if (!favorites.some(fav => fav.name === pokemon.name)) {
      favorites.push(pokemon);
    }
    localStorage.setItem(this.key, JSON.stringify(favorites));
  }

  removeFromFavorites(pokemon: Pokemon): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(fav => fav.name !== pokemon.name);
    localStorage.setItem(this.key, JSON.stringify(favorites));
  }

  getFavorites(): Pokemon[] {
    const favorites = localStorage.getItem(this.key);
    return favorites ? JSON.parse(favorites) : [];
  }

  getFavoritesSignal(): WritableSignal<Pokemon[]> {
    return this.favoritesSignal;
  }

  existsInFavorites(pokemonName:String): boolean {
    const favorites = this.getFavorites();
    return favorites.some(fav => fav.name === pokemonName);
  }
}
