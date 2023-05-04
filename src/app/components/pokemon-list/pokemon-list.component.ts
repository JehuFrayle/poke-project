import { Component, OnInit } from '@angular/core';
import { PokemonList, PokemonSimplified } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList: PokemonList | null = null;
  loading: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loading = true;
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pokemonList = data;
      this.loading = false;
    }, (error) => {
      console.error(error);
    });
  }
  previousPage() {
    this.loading = true;
    this.pokemonService.getPreviousPage(this.pokemonList!).subscribe((data) => {
      this.pokemonList = data;
      this.loading = false;
    }, (error) => {
      console.error(error)
    });
    // Goes to top of page.
    window.scrollTo(0, 0);
  }
  nextPage() {
    this.loading = true;
    this.pokemonService.getNextPage(this.pokemonList!).subscribe((data) => {
      this.pokemonList = data;
      this.loading = false;
    }, (error) => {
      console.error(error);
    });
    // Goes to top of page.
    window.scrollTo(0, 0);
  }
}
