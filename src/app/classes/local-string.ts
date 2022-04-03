import { Printable } from '../interfaces/printable';

export class LocalString implements Printable {
  public message: string;

  constructor(message: string) {
    this.message = message;
  }

  print(): void {
    console.log(this.message);
  }
}
