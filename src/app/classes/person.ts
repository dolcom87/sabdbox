import { Gender } from './gender';
import { Introduce } from '../interfaces/introduce';

export class Person implements Introduce {
  public name: string;
  public age: number;
  public gender: Gender;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(person?: Person): void {
    const personName = person ? `, ${person.name}` : '';
    console.log(
      `${this.name}: Hello${personName}! I'm ${this.name} and I'm ${this.age} years old`
    );
  }

  public offerToGetIntoSexWith(person: Person): void {
    console.log(
      `${this.name}: Hey ${person.name}, how about having sex with me?`
    );
  }

  public agree(): void {
    console.log(`${this.name}: Okay, let's do it!`);
  }

  public refuse(): void {
    console.log(`No, fuck you! I'm not a homosexual person`);
  }

  public soSorry(): void {
    console.log(`${this.name}: Oh, it's so sorry...`);
  }

  public noItsNotSorry(): void {
    console.log(`${this.name}: No, that's not sorry at all! Fuck you!`);
  }

  public getSexWith(person: Person): void {
    console.log(`${this.name}: Aww yeah!`);
    console.log(`${person.name}: ah-ah! oh-oh!`);
  }
}
