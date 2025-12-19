import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; // <--- Need this for *ngIf
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  showSidebar = false;

  constructor(private router: Router) {
    // Listen to every time the URL changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // If the URL contains 'seafarers', show the sidebar
      this.showSidebar = event.url.includes('seafarers');
    });
  }
}