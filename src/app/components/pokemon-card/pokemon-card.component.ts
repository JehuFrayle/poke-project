import { Component, Input } from '@angular/core';
import { Pokemon, PokemonSimplified, Type2 } from 'src/app/models/pokemon.model';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonSimplified | Pokemon | null;
  @Input() hoverable = true;
  
  index = 0;
  types: Type2[] = [];
  defaultImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'
  pokemonImgSRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.index}.png`;

  constructor(private pokemonService: PokemonService, private pokemonCollection: PokemonCollectionService) { }

  ngOnInit(): void {
    if (this.pokemon === null) {
      this.pokemonCollection.getCurrentPokemon().subscribe((pokemon) => {
        this.pokemon = pokemon;
        this.updatePokemon();
      });
      return;
    }

    const urlParts = (this.pokemon as PokemonSimplified).url.split('/');
    this.index = parseInt(urlParts[urlParts.length - 2]);
    this.pokemonImgSRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.index}.png`;
    //Get Pokemon by index
    this.pokemonService.getOnePokemon(this.pokemon as PokemonSimplified).subscribe((pokemon) => {
      this.types.push(pokemon.types[0].type);
      pokemon.types[1] ? this.types.push(pokemon.types[1].type) : null;

      if (this.pokemon?.name === '') {
        this.pokemon.name = pokemon.name;
      }
    });
  }

  updatePokemon() {
    if ((this.pokemon as Pokemon).types) {

      this.index = (this.pokemon as Pokemon).id;
      this.types = []; //Reset types
      this.types.push((this.pokemon as Pokemon).types[0].type);
      (this.pokemon as Pokemon).types[1] ? this.types.push((this.pokemon as Pokemon).types[1].type) : null;

      this.pokemonCollection.getCurrentPokemonIsShiny().subscribe((isShiny) => {
        if (isShiny) {
          this.pokemonImgSRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${this.index}.png`;
          return;
        }
        this.pokemonImgSRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.index}.png`;
      });
      return;
    }
  }
  useDefaultImage(event: any) { // <== this function sets the default image if the pokemon image is not found
    event.target.src = this.defaultImage;
  }
}
