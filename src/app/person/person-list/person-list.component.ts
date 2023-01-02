import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { PersonService } from 'src/app/pserson/person.service';
@Component({
  templateUrl: './person-list.component.html'
  
})
export class PersonListComponent implements OnInit {
  person$:Observable<Person[]>
  constructor(private service:PersonService){
    this.person$=this.service.getPersons();

  }
  ngOnInit() {

  }

}
