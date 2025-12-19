import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // We fixed the name here

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));