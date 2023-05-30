import { Component, OnInit } from '@angular/core';
import { Stat } from 'src/app/models/pokemon.model';
import { ColorWithRange, getPaletteByColor } from 'src/app/models/palettes.model';
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
    this.pokeCollection.getCurrentPokemonSpecies().subscribe((pokemonSpecies) => {
      this.colorPalette = getPaletteByColor(pokemonSpecies.color.name);
    }, (error) => {
      console.log(error);
    });
  }

  getWidthByValue(value: number) {
    return value / 255 * 100; // 255 is the max value for a stat
  }
  // Función que recibe un stat de tipo número y devuelve un string con el color en hexadecimal correspondiente
  colorPalette: ColorWithRange[] = [];
  getColor(stat: number): string {
    // Definir la paleta de colores como un arreglo de objetos con el rango y el color
    const palette = this.colorPalette;


    // Recorrer la paleta y verificar si el stat está dentro de algún rango
    for (let item of palette) {
      if (stat >= item.range[0] && stat <= item.range[1]) {
        // Si el stat está dentro del rango, devolver el color correspondiente
        return item.color;
      }
    }

    // Si el stat no está dentro de ningún rango, devolver un color por defecto (gris)
    return "#9E9E9E";
  }

}
