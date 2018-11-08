import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  pokemon: any[] = [];

  ngOnInit() {
  }

  onSearch(Form: NgForm){
    return this.dataApiService.getPokemonByName(Form.value.pokemonName).subscribe(pokemon => {
      console.log(pokemon);
      this.pokemon = [];
      this.pokemon.push(pokemon['id'],pokemon['name'],pokemon['weight'],pokemon['height'],pokemon['base_experience']) ; 
      console.log(this.pokemon);
    });
  }
}
