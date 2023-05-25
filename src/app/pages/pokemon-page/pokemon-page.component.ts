import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { PokemonSimplified, Type2 } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  allTypes: Type2[] = [];
  pokemonList: PokemonSimplified[] = [];
  searchTerm: string = '';
  notFound: boolean = false;

  constructor(private pokemonService: PokemonService) { }
  ngOnInit(): void {
    this.initialPokemonList();
    this.pokemonService.getAllTypes().subscribe((types) => {
      this.allTypes = types.results;
    });

    //toggle types if open
    if(this.showType) this.typeToggle();
    this.setSearchQuery();
  }

  initialPokemonList() {
    this.pokemonService.getPokemonList().subscribe(
      (pokemonList) => {
        this.pokemonList = pokemonList.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  filterPokemon(type: Type2) {
    this.pokemonService.getPokemonListByType(type.name).subscribe((pokemonList) => {
      this.pokemonList = pokemonList.pokemon.map((pokemon) => pokemon.pokemon); //Get the pokemon simplified of each pokemon with type slot
    });
    this.typeToggle();
  }

  showType = false;
  typeToggle() {
    this.showType = !this.showType;
  }
  activeSearchBar = false;
  searchBarToggle() {
    this.activeSearchBar = !this.activeSearchBar;
  }

  setSearchQuery() {
    const search = document.querySelector('#searchInput') as HTMLInputElement;
    const keyup$ = fromEvent(search, 'keyup');
    keyup$
    .pipe(
      map((e:Event) =>(e.target as HTMLInputElement).value),
      debounceTime(500))
    .subscribe((query) => {
      if(query === ""){
        this.initialPokemonList();
        return;
      }
      this.searchTerm = query;
      this.searchPokemon();
    });
  }
  searchPokemon(){
    if (this.showType) this.typeToggle()
    this.pokemonService.searchPokemonByName(this.searchTerm)
    .subscribe((results) => {
      console.log(this.searchTerm);
      this.pokemonList = results;
      this.notFound = false;
  
    }, (error) => {
      console.log(error.error.text);
      this.pokemonList = [];
      this.notFound = true;
    });
  }
}
