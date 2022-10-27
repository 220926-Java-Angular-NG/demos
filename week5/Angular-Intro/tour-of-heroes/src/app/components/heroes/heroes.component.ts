import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';
import {Hero} from './hero'
import { HEROES } from './mock-heroes';
// import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// since we created a service we are using the service in order to get our heroes
//this is to remind us that components should only focus on 
//displaying data and leave the retrieval of data to the service
//  heroes = HEROES;

heroes: Hero[] = [];

 selectedHero?:Hero;

 onSelected(hero: Hero):void {
  this.selectedHero = hero;
 }
// the constructor of a component get executed first
// if we need dependencies in our class the constructor is the best place
// (and best practice) to put them
// using the private keyword in our constructor - simultaneously defining
//heroService asas a private property on this class and well as dientifying this class as
//a HeroService injection site
  constructor(private heroService:HeroService) { }


  // Angular creates a component; renders it; creates and renders its children;
  //checks it when its data-bound properties change; and destroys it 
  //before removing it from the DOM. these events are called "Lifecycle Hooks"
  // ngOnInit - called once to initialize the component and set the input properties

  ngOnInit(): void {
     this.getHeroes();
  }

  // this is how we were receiving our hero before when we were making a synchronous
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  //now we are telling our application that we will be aking asynchronous calls
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (heroData) => this.heroes = heroData
      )
  }

  add(name:string): void {
    name = name.trim();

    if(!name) {return;}

    this.heroService.addHero({name} as Hero).subscribe(
      hero => {
        this.heroes.push(hero);
      }
    )

  }

  delete(hero: Hero):void {
    //here we are uodatng our hero array to have every hero except
    // the one were going to delete for our db
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

 

}
