import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // having the @Input decorator on this component signifies that this is a 
  //child component that can recieve data from a parent component
  //@Input and @Output give a child component a way to communicate with 
  //its parent component. 
  //@Input lets a parent component update data in the child component
  //@Output lets the child component send data to a prents component

  // @Input() hero?: Hero;
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //route.snapshot - is a static image oof the route info shortly after the coponent
    //was created
    //paramMap is a dictionary of route parameter values extraced from
    //the URL . so the id return the id of the hero passed into that URL
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack(): void{
    this.location.back()
  }

  save(): void {
    if(this.hero) {
      this.heroService.updateHero(this.hero).subscribe(
        () => this.goBack()
      );
    }
  }

}
