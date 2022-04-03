import { Printable } from '../interfaces/printable';

export abstract class Point implements Printable {
  public x: number;
  public y: number;

  protected constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  print(): void {
    console.log(`x: ${this.x}; y: ${this.y}`);
  }
}
