import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-onepokemonpage',
  templateUrl: './onepokemon-page.component.html',
  styleUrls: ['./onepokemon-page.component.scss']
})
export class OnepokemonpageComponent implements OnInit {
  //Get pokemon number by url
  pokemonNumber = 0;
  pokemonName = '';

  constructor(private route: ActivatedRoute, 
    private pokemonService: PokemonService, 
    private pokemonCollection: PokemonCollectionService,
    private title: Title) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      Number(params['id']) ? this.pokemonNumber = Number(params['id']) : this.pokemonName = params['id'];
    });

    this.pokemonService.getPokemonByNumber(this.pokemonNumber || this.pokemonName).subscribe(
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
