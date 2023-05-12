import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonList, PokemonSimplified, TypeList, TypeResult } from '../models/pokemon.model';

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
  getOnePokemon(pokemon: PokemonSimplified){
    return this.http.get<Pokemon>(pokemon.url);
  }
  getPokemonByNumber(number: number | string){
    if(typeof number === 'string') number = number.toLowerCase();
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${number}`);
  }
  getPokemonListByType(type: string){
    return this.http.get<TypeResult>(`https://pokeapi.co/api/v2/type/${type}`);
  }
  getAllTypes(){
    return this.http.get<TypeList>(`https://pokeapi.co/api/v2/type?limit=18`);
  }
  searchPokemonByName(query:string){
    return this.http.get<PokemonSimplified[]>(`https://pokemon-searcher.jehufrayle.com/index.php?name=${query}`);
  }
}
