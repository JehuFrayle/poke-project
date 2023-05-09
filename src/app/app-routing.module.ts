import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { OnepokemonpageComponent } from './pages/onepokemon-page/onepokemon-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon', component: PokemonPageComponent},
  { path: 'pokemon/:id', component: OnepokemonpageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }