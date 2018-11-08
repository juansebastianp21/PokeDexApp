import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//Services
import { DataApiService } from './services/data-api.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonTipesComponent } from './pokemon-tipes/pokemon-tipes.component';
import { PokemonInitialComponent } from './pokemon-initial/pokemon-initial.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    PokemonListComponent,
    PokemonSearchComponent,
    PokemonTipesComponent,
    PokemonInitialComponent,
    PokemonCardComponent,
    ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule.forRoot()
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
