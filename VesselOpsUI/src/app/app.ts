import { Component } from '@angular/core';
import { CrewProfileComponent } from './crew-profile/crew-profile'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CrewProfileComponent], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'VesselOpsUI';
}