import { Component, Input, OnInit } from '@angular/core';
import {  PokemonSimplified } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: PokemonSimplified[] | null = null;
  loading: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
}
