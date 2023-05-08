import { Component, Input } from '@angular/core';
import { PokemonSimplified, Type2 } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonSimplified;
  index = 0;
  types:Type2[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // We need to get the index from the url.
    const urlParts = this.pokemon.url.split('/');
    this.index = parseInt(urlParts[urlParts.length - 2]);

    //Get Pokemon by index
    this.pokemonService.getOnePokemon(this.pokemon).subscribe((pokemon) => {
      this.types.push(pokemon.types[0].type);
      pokemon.types[1] ? this.types.push(pokemon.types[1].type) : null;

      if(this.pokemon.name === ''){
        this.pokemon.name = pokemon.name;
      }
    });
  }
}
