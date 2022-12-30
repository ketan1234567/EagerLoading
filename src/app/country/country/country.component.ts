import { Component } from '@angular/core';

@Component({
  template: `<h2>Welcome to country Home</h2>
  <a [routerLink]="['country-list']">View Country</a>
  <router-outlet></router-outlet>`,
 
})
export class CountryComponent {

}
