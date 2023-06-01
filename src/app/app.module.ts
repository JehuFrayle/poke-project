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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingPokeballComponent } from './components/loading-pokeball/loading-pokeball.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { DescriptionsComponent } from './components/descriptions/descriptions.component';
import { SummaryComponent } from './components/summary/summary.component';
import { StatBarComponent } from './components/stat-bar/stat-bar.component';
import { StatPipe } from './pipes/stat.pipe';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';

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
    OnepokemonpageComponent,
    LoadingPokeballComponent,
    DescriptionsComponent,
    SummaryComponent,
    StatBarComponent,
    StatPipe,
    DarkModeToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
