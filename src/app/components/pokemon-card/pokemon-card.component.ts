import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Pokemon } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class PokemonCardComponent  implements OnInit {

  @Input() pokemon!: Pokemon;

  constructor() { }

  ngOnInit() {}

}
