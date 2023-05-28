import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stat'
})
export class StatPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'hp':
        return 'HP';
      case 'attack':
        return 'Attack';
      case 'defense':
        return 'Defense';
      case 'special-attack':
        return 'Sp. Atk';
      case 'special-defense':
        return 'Sp. Def';
      case 'speed':
        return 'Speed';
      default:
        return value;
    }
  }
}