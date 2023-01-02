import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryService } from './services/country.service';


@NgModule({
  declarations: [
    CountryComponent,
    CountryListComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ CountryService ]
})

export class CountryModule { 
  constructor(){
    console.log("Country Module loaded");
  }
}
