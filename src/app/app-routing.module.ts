import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListGamesComponent } from './list-games/list-games.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'games', component: ListGamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
