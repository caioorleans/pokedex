import { Component, Input, OnInit } from '@angular/core';
import { IonToolbar, IonHeader, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  imports: [IonToolbar,IonTitle]
})
export class TopbarComponent  implements OnInit {

  @Input() title?: string;

  constructor() { }

  ngOnInit() {}

}
