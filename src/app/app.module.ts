import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';
import { PersonModule } from './person/person/person.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		CountryModule,
    PersonModule,
		AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App Module is loaded");
  }
 }
