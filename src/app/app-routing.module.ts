import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { ListScorersComponent } from './list-scorers/list-scorers.component';

const routes: Routes = [
   {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
   {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'player/:playerId/:seasonId',
    component: PlayerComponent
  },
  {
    path:'list/:leagueId/:seasonId',
    component: ListScorersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
