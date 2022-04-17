import { Person } from '../classes/person';

export interface Introduce {
  greet(person?: Person): void;
}
