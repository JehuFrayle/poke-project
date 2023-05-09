import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonNumberPipe } from './pipes/pokemon-number.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HeaderComponent } from './components/header/header.component';
import { TypeIconComponent } from './components/type-icon/type-icon.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { OnepokemonpageComponent } from './pages/onepokemon-page/onepokemon-page.component'

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonNumberPipe,
    CapitalizePipe,
    HeaderComponent,
    TypeIconComponent,
    HomeComponent,
    PokemonPageComponent,
    FooterComponent,
    OnepokemonpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
