import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonText } from '@ionic/angular/standalone';
import { TopbarComponent } from "../../components/topbar/topbar.component";
import { PokemonCardListComponent } from "../../components/pokemon-card-list/pokemon-card-list.component";
import { Pokemon } from 'src/app/services/pokemon.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonText, CommonModule, FormsModule, TopbarComponent, PokemonCardListComponent]
})
export class FavoritesPage implements OnInit {

  pokemons = signal<Pokemon[]>([]);

  constructor(private favoriteService:FavoritesService) { }

  ngOnInit() {
    this.pokemons.set(this.favoriteService.getFavorites());
  }

}
