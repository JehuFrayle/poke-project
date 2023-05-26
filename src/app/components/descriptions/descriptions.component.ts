import { Component, OnInit } from '@angular/core';
import { FlavorTextEntry } from 'src/app/models/pokemon-species.model';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection.service';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss']
})
export class DescriptionsComponent implements OnInit {

  constructor(private pokemonCollection: PokemonCollectionService) { }

  descriptions: FlavorTextEntry[] = [];
  initialDescription:FlavorTextEntry[] = [{ flavor_text: 'We couldnt find any description for this pokémon.', language: { name: '', url: '' }, version: { name: 'So sorry!', url: '' } }];  ngOnInit(): void {
    this.pokemonCollection.getCurrentPokemonSpecies().subscribe(
      (species) => {
        if (species.flavor_text_entries) {
          this.descriptions = species.flavor_text_entries.filter((description: any) => description.language.name === 'en');
        }
      }, (error) => {
        console.log(error);
        this.descriptions = this.initialDescription;
      });
  }
}
