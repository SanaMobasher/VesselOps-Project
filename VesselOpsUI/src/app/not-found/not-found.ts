import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <div class="container text-center mt-5">
      <h1 class="display-1 fw-bold text-marine">404</h1>
      <p class="lead">Oops! We can't find that page.</p>
      <a routerLink="/dashboard" class="btn btn-primary">Go to Dashboard</a>
    </div>
  `,
  styles: []
})
export class NotFoundComponent {}