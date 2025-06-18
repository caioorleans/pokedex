import { Component, Input, OnInit } from '@angular/core';
import { IonToolbar, IonTitle, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  imports: [IonToolbar,IonTitle, IonIcon, IonButtons, IonButton]
})
export class TopbarComponent  implements OnInit {

  @Input() title?: string = "pokedex";

  constructor() {
    addIcons({
      heart: heart
    });
  }

  ngOnInit() {}

}
