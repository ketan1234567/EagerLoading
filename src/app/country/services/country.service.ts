import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../Country';


const COUNTRIES=[
  new Country(1,'India','newDelhi','INR'),
  new Country(2,'China','beijing','RMB')
];

const countryList$=of(COUNTRIES)
@Injectable()

export class CountryService {
  getCountries():Observable<Country[]>{
  return countryList$;
}
}
