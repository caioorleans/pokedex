import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonIcon, IonCardHeader, IonCardTitle, IonImg, IonCardContent, IonChip, IonButton } from '@ionic/angular/standalone';
import { PokemonDetails } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details-card',
  templateUrl: './pokemon-details-card.component.html',
  styleUrls: ['./pokemon-details-card.component.scss'],
  standalone: true,
  imports: [CommonModule,IonCard,IonIcon, IonCardHeader, IonCardTitle, IonImg, IonCardContent, IonChip, IonButton],
})
export class PokemonDetailsCardComponent  implements OnInit {

  @Input() pokemonDetails?:PokemonDetails
  @Input() description?:String;

  constructor() { }

  ngOnInit() {}

}
