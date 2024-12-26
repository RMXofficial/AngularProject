import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import {HeaderComponent} from './app/header.component'; // we also dont need this because we execute it in AppComponent

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
// bootstrapApplication(HeaderComponent); //this is just to try how we can execute multiple components
