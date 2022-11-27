import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

import { RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import {routes} from "./app/app-routing.module";


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule), importProvidersFrom(NoopAnimationsModule),   importProvidersFrom(RouterModule.forRoot(routes))]
}).catch(err => console.error(err));