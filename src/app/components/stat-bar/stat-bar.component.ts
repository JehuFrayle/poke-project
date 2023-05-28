import { Component, OnInit } from '@angular/core';
import { ColorByStat, Stat } from 'src/app/models/pokemon.model';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection.service';

@Component({
  selector: 'app-stat-bar',
  templateUrl: './stat-bar.component.html',
  styleUrls: ['./stat-bar.component.scss']
})
export class StatBarComponent implements OnInit {
  pokemonStats: Stat[] = [];
  constructor(private pokeCollection: PokemonCollectionService) { }

  ngOnInit() {
    this.pokeCollection.getCurrentPokemon().subscribe((pokemon) => {
      this.pokemonStats = [...pokemon.stats];
      console.log(this.pokemonStats);
    }, (error) => {
      console.log(error);
    });
  }

  getWidthByValue(value: number) {
    return value / 255 * 100; // 255 is the max value for a stat
  }
  getColorByStat(stat: number) {
    if (stat <= 30) return ColorByStat[0];
    const quarter = Math.ceil((stat - 30) / 32) - 1;

    return ColorByStat[quarter];
  }
}
