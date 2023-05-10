import { Component, OnInit } from '@angular/core';
import { PokemonSimplified, Type2 } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  allTypes:Type2[] = [];
  pokemonList: PokemonSimplified[] = [];

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

  typeToggle(){
    document.querySelector('.typesContainer')?.classList.toggle('active');
    document.querySelector('p > svg')?.classList.toggle('active');
  }
}
