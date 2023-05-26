import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection.service';
import { Title } from '@angular/platform-browser';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonSpecies } from 'src/app/models/pokemon-species.model';

@Component({
  selector: 'app-onepokemonpage',
  templateUrl: './onepokemon-page.component.html',
  styleUrls: ['./onepokemon-page.component.scss']
})
export class OnepokemonpageComponent implements OnInit {
  //Get pokemon number by url
  pokemon: Pokemon = {} as Pokemon;
  species: PokemonSpecies = {} as PokemonSpecies;

  constructor(private route: ActivatedRoute, 
    private pokemonService: PokemonService, 
    private pokemonCollection: PokemonCollectionService,
    private title: Title) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      Number(params['id']) ? this.pokemon.id = Number(params['id']) : this.pokemon.name = params['id'];
    });

    this.pokemonService.getPokemonByNumber(this.pokemon.id || this.pokemon.name).subscribe(
      (pokemon) => {
        console.log(pokemon);
        this.pokemonCollection.setCurrentPokemon(pokemon);

        const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        this.title.setTitle(`Pokemon - ${pokemonName}`);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
