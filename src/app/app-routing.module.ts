import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonTipesComponent } from './pokemon-tipes/pokemon-tipes.component';
import { PokemonInitialComponent } from './pokemon-initial/pokemon-initial.component';

const routes: Routes = [
  {path: "",component:PokemonSearchComponent},
  {path: "list", component: PokemonListComponent},
  {path: "types", component: PokemonTipesComponent},
  {path: "initial", component: PokemonInitialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
