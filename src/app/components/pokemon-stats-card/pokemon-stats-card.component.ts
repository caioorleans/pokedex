import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {IonCard, IonCardHeader, IonCardTitle, IonList, IonItem, IonLabel, IonBadge} from '@ionic/angular/standalone'
import { PokemonDetails } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-stats-card',
  templateUrl: './pokemon-stats-card.component.html',
  styleUrls: ['./pokemon-stats-card.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    CommonModule
  ]
})
export class PokemonStatsCardComponent  implements OnInit {

  @Input() pokemonDetails?: PokemonDetails

  constructor() { }

  ngOnInit() {
  }

}
