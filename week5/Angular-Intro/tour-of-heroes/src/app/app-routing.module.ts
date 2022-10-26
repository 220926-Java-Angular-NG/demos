import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  // a typical Route has 2 properties
  //path : a string that matches the url in the browser address bar
  //component: the component that the router should
  // create when navigating to this route
  //':id' is a place holder that lets thethe app know that we will 
  //string interpolate some value there
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'heroes', component: HeroesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'detail/:id' ,component:HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
