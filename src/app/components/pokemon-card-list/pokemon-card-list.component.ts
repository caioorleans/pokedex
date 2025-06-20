import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IonGrid, IonCol, IonRow, IonList, IonItem} from '@ionic/angular/standalone';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { Pokemon } from 'src/app/services/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonCardMobileComponent } from "../pokemon-card-mobile/pokemon-card-mobile.component";

@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.scss'],
  imports: [IonGrid, IonRow, IonCol, PokemonCardComponent, CommonModule, IonList, PokemonCardMobileComponent],
})
export class PokemonCardListComponent  implements OnInit {

  @Input() pokemons: Pokemon[] = [];

  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 480;
  }

}
