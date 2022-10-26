import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../components/heroes/hero';
import { HEROES } from '../components/heroes/mock-heroes';
import { MessagesService } from './messages.service';

// @Injectable() decorator marks this class as one that paticipates
//in dependency injection. this hero service class is going to provide an injectable service
//meaning it will be used in another class.. but it can also have other classes injected into

@Injectable({
  providedIn: 'root'
})

// in order to use this service we have to give it a provider 
// since we used ng g s to generate the service in the command line
// we are automaically given a provider that points to the root of the application

export class HeroService {

  // we are creating a function that will return the mock heroes from our mock-heros
  // ts file.
  
  //this signature tells this application that this is a synchronous function
  // getHeroes(): Hero[]{
  //   //add some type of validation
  //   return HEROES
  // }

  //returning an Observable from rxjs is how we allow our application
  //to make asynchonous calls
  getHeroes(): Observable<Hero[]>{
    // note HEROES represents data ! in our case json or some data from our backend
    //of() returns an Observable - this is important becuase we will have to subscribe to
    //this Observsle in ore
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    //! is a 'bang' or a way to force override an optional value
    // we can use this operator now becuase we know that the Hero exists
    // but in the future we will have to include error handling
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero with id: ${id}`)
    return of(hero);
  }
  
//example of dependy injection in Angular
  constructor(private messageService:MessagesService) { }
}
