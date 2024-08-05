import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component'; // you don't have to write ".ts"
// import { HeaderComponent } from './app/header.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
// bootstrapApplication(HeaderComponent).catch((err) => console.error(err)); // it works, but we don't do it like that
