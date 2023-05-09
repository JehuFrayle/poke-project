import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonCollectionService {

  constructor() { }
  private currentPokemon = new BehaviorSubject<Pokemon>({} as Pokemon);
  currentPokemon$ = this.currentPokemon.asObservable();

  getCurrentPokemon(){
    return this.currentPokemon$;
  }
  setCurrentPokemon(pokemon: Pokemon){
    this.currentPokemon.next({} as Pokemon);
    this.currentPokemon.next(pokemon);
  }
}
