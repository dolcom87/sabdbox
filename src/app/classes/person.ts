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
    this.say(
      `Hello${personName}! I'm ${this.name} and I'm ${this.age} years old`
    );
  }

  public offerToGetSexWith(person: Person): void {
    this.say(`Hey ${person.name}, how about having sex with me?`);
  }

  public agree(): void {
    this.say(`Okay, let's do it!`);
  }

  public refuse(): void {
    this.say(`No can do that, sorry!`);
  }

  public soSorry(): void {
    this.say(`Oh, it's so sorry...`);
  }

  public noItsNotSorry(): void {
    this.say("No, that's not sorry at all! Fuck you!");
  }

  public getSexWith(person: Person): void {
    this.say('Aww yeah!');
    person.say('ah-ah! oh-oh!');
  }

  protected say(message: string): void {
    console.log(`${this.name}: ${message}`);
  }
}
