import { Component, OnInit } from '@angular/core';
import { PokemonSpecies } from 'src/app/models/pokemon-species.model';
import { Ability, Pokemon, Stat } from 'src/app/models/pokemon.model';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private pokemonCollection: PokemonCollectionService) { }
  isShiny = false;
  pokemonSpecies:PokemonSpecies = {} as PokemonSpecies;
  pokemon:Pokemon = {} as Pokemon;
  
  genus = '';
  height = 0;
  weight = 0;
  genderRate:string[] = [];
  pokemonColor = '#94CDD5';

  pokemonAbilities: Ability[] = [];

  ngOnInit(): void {
    this.pokemonCollection.getCurrentPokemonIsShiny().subscribe((isShiny) => {
      this.isShiny = isShiny;
    });
    this.pokemonCollection.getCurrentPokemonSpecies().subscribe((species) => {
      this.pokemonSpecies = species;
      this.genus = species.genera.filter((genus) => genus.language.name === 'en')[0].genus;
      this.genderRate = this.getGenderRate(species.gender_rate);

      this.pokemonColor = species.color.name;
      if(species.color.name === 'yellow'){
        this.pokemonColor = '#ffbb00'; //I don't like the yellow color
      }
    });
    this.pokemonCollection.getCurrentPokemon().subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.height = pokemon.height;
      this.weight = pokemon.weight;
      this.pokemonAbilities = pokemon.abilities;
    });
  }

  setShiny() {
    const shiny = !this.isShiny;
    this.pokemonCollection.setCurrentPokemonIsShiny(shiny);
  }
  
  getGenderRate(eight:number){
    let result = [];
    if(eight === -1){
      result = ["Genderless"];
    } else {
      const femaleRatio = 100 * (eight / 8);
      const maleRatio = 100 - femaleRatio;
      result = [`${maleRatio}%`, `${femaleRatio}%`];
    }
    return result;
  }
}
