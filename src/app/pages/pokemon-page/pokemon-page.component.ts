import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  pages = -1;

  constructor(private pokemonService: PokemonService,
    private title: Title) { }

  ngOnInit(): void {
    this.initialPokemonList();
    this.pokemonService.getAllTypes().subscribe((types) => {
      this.allTypes = types.results;
    });

    //toggle types if open
    if (this.showType) this.typeToggle();
    this.setSearchQuery();
  }

  initialPokemonList() {
    this.pokemonService.getPokemonList().subscribe(
      (pokemonList) => {
        this.pokemonList = pokemonList.results;
        this.pages = 0;
      },
      (error) => {
        console.log(error);
      }
    );
    this.title.setTitle('All pokémon');
    if (this.showType) this.typeToggle();
  }
  filterPokemon(type: Type2) {
    this.pokemonService.getPokemonListByType(type.name).subscribe((pokemonList) => {
      const typeName = type.name.charAt(0).toUpperCase() + type.name.slice(1);
      this.title.setTitle(`${typeName} pokémon`);
      this.pokemonList = pokemonList.pokemon.map((pokemon) => pokemon.pokemon); //Get the pokemon simplified of each pokemon with type slot
      this.pages = -1;
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
        map((e: Event) => (e.target as HTMLInputElement).value),
        debounceTime(500))
      .subscribe((query) => {
        if (query === "") {
          this.initialPokemonList();
          return;
        }
        this.searchTerm = query;
        this.searchPokemon();
      });
  }
  searchPokemon() {
    if (this.showType) this.typeToggle()
    this.pokemonService.searchPokemonByName(this.searchTerm)
      .subscribe((results) => {
        console.log(this.searchTerm);
        this.pokemonList = results;
        this.notFound = false;
        this.pages = -1;

      }, (error) => {
        console.log(error.error.text);
        this.pokemonList = [];
        this.notFound = true;
        this.pages = -1;
      });
  }
  
  nextPage() {
    this.pages++;
    this.pokemonService.getPokemonList((this.pokemonList.length * this.pages)).subscribe(
      (pokemonList) => {
        this.pokemonList = pokemonList.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  previousPage() {
    this.pages--;
    this.pokemonService.getPokemonList((this.pokemonList.length * this.pages)).subscribe(
      (pokemonList) => {
        this.pokemonList = pokemonList.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
