import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonSpecies } from '../models/pokemon-species.model';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonCollectionService {

  constructor(private pokemonService: PokemonService) { }
  private currentPokemon = new BehaviorSubject<Pokemon>({} as Pokemon);
  currentPokemon$ = this.currentPokemon.asObservable();
  private currentPokemonIsShiny = new BehaviorSubject<boolean>(false);
  currentPokemonIsShiny$ = this.currentPokemonIsShiny.asObservable();

  private currentPokemonSpecies = new BehaviorSubject<PokemonSpecies>({} as PokemonSpecies);
  currentPokemonSpecies$ = this.currentPokemonSpecies.asObservable();

  getCurrentPokemon(){
    return this.currentPokemon$;
  }
  getCurrentPokemonSpecies(){
    return this.currentPokemonSpecies$;
  }
  setCurrentPokemon(pokemon: Pokemon){
    this.currentPokemon.next({} as Pokemon);
    this.currentPokemon.next(pokemon);

    this.currentPokemonSpecies.next({} as any);
    this.pokemonService.getPokemonSpecies(pokemon).subscribe(
      (species) => {
        this.currentPokemonSpecies.next(species);
      }
    );
  }
  setCurrentPokemonIsShiny(isShiny: boolean){
    this.currentPokemonIsShiny.next(isShiny);
  }
  getCurrentPokemonIsShiny(){
    return this.currentPokemonIsShiny$;
  }
}
