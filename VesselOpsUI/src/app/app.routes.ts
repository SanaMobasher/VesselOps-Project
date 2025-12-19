import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { SeafarersListComponent } from './seafarers-list/seafarers-list';
import { CrewProfileComponent } from './crew-profile/crew-profile';
import { NotFoundComponent } from './not-found/not-found';



export const routes: Routes = [
  { path: '', redirectTo: 'seafarers/profile', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  

  { path: 'seafarers/profile', component: CrewProfileComponent }, // Overview
  { path: 'seafarers/personal', component: NotFoundComponent },    // Placeholder
  { path: 'seafarers/contacts', component: NotFoundComponent },    // Placeholder
  { path: 'seafarers/kin', component: NotFoundComponent },         // Placeholder
  { path: 'seafarers/services', component: NotFoundComponent },    // Placeholder
  { path: 'seafarers/docs', component: NotFoundComponent },        // Placeholder
  { path: 'seafarers/edu', component: NotFoundComponent },         // Placeholder
  { path: 'seafarers/bank', component: NotFoundComponent },        // Placeholder

  { path: '**', component: NotFoundComponent }
];