import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListGamesComponent } from './list-games/list-games.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'games', component: ListGamesComponent},
  { path: 'accounts', component: ListAccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
