import { Injectable } from '@angular/core';
import { Person } from '../classes/person';

@Injectable({
  providedIn: 'root',
})
export class FunctionalService {
  constructor() {}

  public getPeopleIntoConversation(person: Person, person2: Person): void {
    person.greet();
    person2.greet(person);
    person.offerToGetSexWith(person2);

    if (person.gender !== person2.gender) {
      person2.agree();
      person.getSexWith(person2);
    } else {
      person2.refuse();
      person.soSorry();
      person2.noItsNotSorry();
    }

    console.log('');
  }
}
