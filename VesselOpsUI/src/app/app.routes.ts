import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { SeafarersListComponent } from './seafarers-list/seafarers-list';
import { CrewProfileComponent } from './crew-profile/crew-profile';
import { NotFoundComponent } from './not-found/not-found';

// src/app/app.routes.ts
export const routes: Routes = [
 
  { path: '', redirectTo: 'seafarers/list', pathMatch: 'full' },
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'seafarers/list', component: SeafarersListComponent },
  { path: 'seafarers/personal/:id', component: CrewProfileComponent },
  
  { path: 'seafarers/personal', component: NotFoundComponent },
  { path: 'seafarers/contacts', component: NotFoundComponent },
  { path: 'seafarers/kin', component: NotFoundComponent },
  { path: 'seafarers/services', component: NotFoundComponent },
  { path: 'seafarers/docs', component: NotFoundComponent },
  { path: 'seafarers/edu', component: NotFoundComponent },
  { path: 'seafarers/bank', component: NotFoundComponent },

  // 6. Catch-all for mistakes
  { path: '**', component: NotFoundComponent }
];