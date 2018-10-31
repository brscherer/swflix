import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular2SwapiModule } from 'angular2-swapi';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { DataService } from './data.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ContentComponent,
      DetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      Angular2SwapiModule,
      FontAwesomeModule
   ],
   providers: [
      DataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
