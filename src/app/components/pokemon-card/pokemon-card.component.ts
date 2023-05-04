import { Component, Input } from '@angular/core';
import { PokemonSimplified } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonSimplified;
  index = 0;

  ngOnInit(): void {
    // We need to get the index from the url.
    const urlParts = this.pokemon.url.split('/');
    this.index = parseInt(urlParts[urlParts.length - 2]);
  }
}
