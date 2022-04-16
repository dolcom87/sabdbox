import { Person } from './person';
import { Gender } from './gender';

export class Woman extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    this.gender = Gender.woman;
  }
}
