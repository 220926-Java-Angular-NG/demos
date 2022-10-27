import { Injectable } from '@angular/core';
import{InMemoryDbService} from 'angular-in-memory-web-api'
import { Hero } from '../components/heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
      {id:12, name:'Dr.Nice'},
      {id:13, name:'Bombasto'},
      {id:14, name:'Super Woman'},
      {id:15, name:'The Problem'},
      {id:16, name:'RubberBandMan'},
      {id:17, name:'Batman'},
      {id:18, name:'Bubbles'}
  ];
  return {heroes};
  }

  //Override the genId method to ensure that the hero always has an id
  //if the aay is empyt it will return the id 12
  // if the array is not empty it will add 1 to the value of the last heros id
  genId(heroes:Hero[]): number {
    //ternary operators
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 12;
  }

  constructor() { }
}
