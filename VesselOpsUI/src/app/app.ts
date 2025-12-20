import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  currentId: string | null = '1'; // Default to 1

  constructor(private router: Router) {
    // Watch the URL changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // 1. Show/Hide sidebar logic
      this.showSidebar = event.url.includes('seafarers');

      // 2. Extract the ID from the URL (e.g., /seafarers/personal/2)
      const urlSegments = event.url.split('/');
      const idFromUrl = urlSegments[urlSegments.length - 1];
      
      // If the last part of the URL is a number, save it!
      if (!isNaN(Number(idFromUrl)) && idFromUrl !== '') {
        this.currentId = idFromUrl;
        console.log('Sidebar updated to use ID:', this.currentId);
      }
    });
  }
}