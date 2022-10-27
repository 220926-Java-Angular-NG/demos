import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../components/heroes/hero';
import { HEROES } from '../components/heroes/mock-heroes';
import { MessagesService } from './messages.service';
import {catchError, map, tap} from 'rxjs/operators'

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

  //baseUrL is the url that our application will be sending requests to
  //  ex: http://localhost:8080/
  private heroesURL = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  //returning an Observable from rxjs is how we allow our application
  //to make asynchonous calls
  //get heroes 
  getHeroes(): Observable<Hero[]>{
    // note HEROES represents data ! in our case json or some data from our backend
    //of() returns an Observable - this is important becuase we will have to subscribe to
    //this Observsle in ore
    // const heroes = of(HEROES);
// this.messageService.add('HeroService: fetched heroes')

    //instead of using of() to get our Observable, Http methods retirn Observables
    return this.http.get<Hero[]>(this.heroesURL).pipe(
      tap(_ => this.log(`fetched heroes`)),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
  }

  getHero(id: number): Observable<Hero> {
    //! is a 'bang' or a way to force override an optional value
    // we can use this operator now becuase we know that the Hero exists
    // but in the future we will have to include error handling
    // const hero = HEROES.find(h => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero with id: ${id}`)
    // this.log(`fetched hero with id: ${id}`)
    const url = `${this.heroesURL}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetch hero with id ${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  //update 
  // the http.put() method expects 3 params 
  //- the url
  //-the data to update
  //-Options
  updateHero(hero:Hero):Observable<any>{
    return this.http.put(this.heroesURL,hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero with id: ${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }

  //create a hero 
 addHero(hero:Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesURL,hero,this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero with id: ${newHero.id}`)),
  catchError(this.handleError<Hero>('addHero'))
  )
 }

 //delete a hero
 deleteHero(id:number):Observable<Hero>{
  const url = `${this.heroesURL}/${id}`;
  return this.http.delete<Hero>(url,this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero with id: ${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  )
 }


  /**
   * our handle error method will be used to handle erroes that could occur when sending 
   * requests to our server
   * our handle error will take in an operation (name of the method that was called) as 
   * well as a result .. ie, what should be returned in case of an error so that the
   * application can continue running and not crash. 
   * 
   */

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any) : Observable<T> => {
      //TODO:send the error to a remote logging infrasturcture
      console.log(error)

      //display the error for our user to see what went wrong
      this.log(`${operation} failed: ${error.message}`)

      //let the app keep running by returning an empty result
      return of(result as T)
    }
  }


//example of dependy injection in Angular
  constructor(private messageService:MessagesService, private http: HttpClient) { }
}
