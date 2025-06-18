import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Pokemon } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class PokemonCardComponent{

  @Input() pokemon!: Pokemon;

  constructor(private router: Router) {}

  goToDetails(name: string) {
    this.router.navigate(['details', name]);
  }

}
