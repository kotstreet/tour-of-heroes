import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, firstName: 'Dr Nice', age: 22, secondName: 'Very', countOfMessages: 3 },
      { id: 12, firstName: 'Narco', age: 35, secondName: 'Torgovetc', countOfMessages: 32 },
      { id: 13, firstName: 'Bombasto', age: 21, secondName: 'Boom', countOfMessages: 1 },
      { id: 14, firstName: 'Celeritas', age: 67, secondName: 'Kanima', countOfMessages: 14 },
      { id: 15, firstName: 'Magneta', age: 45, secondName: 'Hisako', countOfMessages: 0 },
      { id: 16, firstName: 'RubberMan', age: 43, secondName: 'Butter', countOfMessages: 0 },
      { id: 17, firstName: 'Dynama', age: 34, secondName: 'Misto', countOfMessages: 21 },
      { id: 18, firstName: 'Dr IQ', age: 84, secondName: '', countOfMessages: 2 },
      { id: 19, firstName: 'Magma', age: 31, secondName: 'Vulkana', countOfMessages: 12 },
      { id: 20, firstName: 'Tornado', age: 39, secondName: 'Katrin', countOfMessages: 22 },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
