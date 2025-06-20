import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonText, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { Pokemon, PokemonService } from 'src/app/services/pokemon.service';
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";
import { TopbarComponent } from "../../components/topbar/topbar.component";
import { PokemonCardListComponent } from "../../components/pokemon-card-list/pokemon-card-list.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonText, IonInfiniteScroll, IonInfiniteScrollContent, CommonModule, FormsModule, RouterModule, PokemonCardComponent, TopbarComponent, PokemonCardListComponent]
})
export class HomePage implements OnInit {

  pokemons = signal<Pokemon[]>([]);
  offset = 0;
  limit = 20;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadInitial();
  }

  loadInitial(): void {
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe(data => {
      this.pokemons.set(data);
    });
  }

  loadMore(event: any): void {
    this.offset += this.limit;
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe(data => {
      const current = this.pokemons();
      this.pokemons.set([...current, ...data]);
      event.target.complete();

      if (data.length < this.limit) {
        event.target.disabled = true;
      }
    });
  }
}

