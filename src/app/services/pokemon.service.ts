import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonList } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonList(){
    return this.http.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon`);
  }
  getNextPage(current:PokemonList){
    if(!current.next){
      throw new Error("There is no next!");
    }
    return this.http.get<PokemonList>(current.next);
  }
  getPreviousPage(current:PokemonList){
    if(!current.previous){
      throw new Error("There is nos previous!");
    }
    return this.http.get<PokemonList>(current.previous);
  }
  getOnePokemon(url:string){
    return this.http.get<Pokemon>(url);
  }
}
