import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonText, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { Pokemon, PokemonService } from 'src/app/services/pokemon.service';
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";
import { TopbarComponent } from "../../components/topbar/topbar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonText, IonGrid, IonCol, IonRow, CommonModule, FormsModule, RouterModule, PokemonCardComponent, TopbarComponent]
})
export class HomePage implements OnInit {

  pokemons = signal<Pokemon[]>([]);

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList(0, 20).subscribe(data => {
      this.pokemons.set(data);
    });
  }

}
