import { Component, OnInit } from '@angular/core';
import { PokemonSimplified, Type2 } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  allTypes:Type2[] = [];
  pokemonList: PokemonSimplified[] = [];
  searchTerm: string = '';
  notFound: boolean = false;

  constructor(private pokemonService: PokemonService) { }
  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(
      (pokemonList) => {
        this.pokemonList = pokemonList.results;
      },
      (error) => {
        console.log(error);
      }
    );
    this.pokemonService.getAllTypes().subscribe((types) => {
      this.allTypes = types.results;
    });

    //toggle types if open
    if(document.querySelector('.typesContainer')?.classList.contains('active')){
      this.typeToggle();
    }
  }

  filterPokemon(type: Type2){
    this.pokemonService.getPokemonListByType(type.name).subscribe((pokemonList) => {
      this.pokemonList = pokemonList.pokemon.map((pokemon) => pokemon.pokemon); //Get the pokemon simplified of each pokemon with type slot
    });
    this.typeToggle();
  }

  showType = false;
  typeToggle(){
    this.showType = !this.showType;
  }

  searchPokemon(){
    if(this.showType) this.typeToggle();
    
    if(this.searchTerm === ''){
      this.ngOnInit();
      this.notFound = false;
      return;
    }
    this.pokemonService.searchPokemonByName(this.searchTerm)
    .subscribe((results) => {
      console.log(results);
      this.pokemonList = results;
      this.notFound = false;
    }, (error) => {
      console.log(error.error.text);
      this.pokemonList = [];
      this.notFound = true;
    });
  }
}
