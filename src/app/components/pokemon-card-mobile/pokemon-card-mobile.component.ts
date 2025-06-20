import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/services/pokemon.service';
import { IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card-mobile',
  templateUrl: './pokemon-card-mobile.component.html',
  styleUrls: ['./pokemon-card-mobile.component.scss'],
  imports: [IonItem, IonAvatar, IonLabel, CommonModule]
})
export class PokemonCardMobileComponent  implements OnInit {

  @Input() pokemon!: Pokemon;

  constructor(private router:Router) { }

  ngOnInit() {}

  goToDetails(name: string) {
    this.router.navigate(['details', name]);
  }

}
