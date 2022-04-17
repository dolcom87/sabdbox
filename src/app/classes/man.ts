import { Person } from './person';
import { Gender } from './gender';

export class Man extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    this.gender = Gender.man;
  }

  override refuse() {
    this.say(`No, fuck you!`);
  }
}
