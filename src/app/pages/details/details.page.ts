import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonHeader,IonGrid, IonCol, IonRow,IonFab, IonFabButton } from '@ionic/angular/standalone';
import { TopbarComponent } from "../../components/topbar/topbar.component";
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonDetails, PokemonService, PokemonSpecies } from 'src/app/services/pokemon.service';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';
import { PokemonDetailsCardComponent } from "../../components/pokemon-details-card/pokemon-details-card.component";
import { PokemonStatsCardComponent } from "../../components/pokemon-stats-card/pokemon-stats-card.component";
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonHeader, IonIcon, IonContent, IonGrid, IonCol, IonRow, IonFab, IonFabButton, CommonModule, FormsModule, TopbarComponent, PokemonDetailsCardComponent, PokemonStatsCardComponent]
})
export class DetailsPage implements OnInit {

  pokemonName?: string;
  pokemonDetails?: PokemonDetails;
  pokemonSpecies?: PokemonSpecies;
  description = '';

  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private favoriteService: FavoritesService
  ) {
    addIcons({ heartOutline, heart });
  }

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name') || undefined;
    if (this.pokemonName) {
      this.loadPokemonData(this.pokemonName);
      this.isFavorite = this.favoriteService.existsInFavorites(this.pokemonName);
    }
  }

  loadPokemonData(pokemonName: string): void {
    this.pokemonService.getPokemonByName(pokemonName).subscribe(details => {
      this.pokemonDetails = details;
    });

    this.pokemonService.getPokemonSpecies(pokemonName).subscribe(species => {
      this.pokemonSpecies = species;
      this.description = this.getEnglishDescription(species.flavor_text_entries);
    });
  }

  private getEnglishDescription(entries: any[]): string {
    const entry = entries.find(e => e.language.name === 'en');
    return entry ? entry.flavor_text.replace(/\f/g, ' ') : 'Descrição indisponível.';
  }

  toggleFavorite(): void {
    if (this.pokemonDetails) {
      var pokemon:Pokemon = {
        name: this.pokemonDetails.name,
        image: this.pokemonDetails.sprites.front_default,
      };
      if (this.isFavorite) {
        this.favoriteService.removeFromFavorites(pokemon);
      } else {
        this.favoriteService.addToFavorites(pokemon);
      }
      this.isFavorite = !this.isFavorite;
    }
  }

}
