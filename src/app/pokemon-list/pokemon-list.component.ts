import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { PokemonInterface } from '../models/pokemon-interface';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  region = "2";
  constructor(private dataApiService: DataApiService) { }

  limit = 20;
 public pokemons: any;
 private pokemonList:any;

  ngOnInit() {

  
  }

  listRegionPokemon(region: any){
    
    this.dataApiService.getPokemonByRegion(region).subscribe((pokemons) =>{
      this.pokemonList = pokemons['pokemon_entries'];
      //forEach this.pokemons = this.pokemonList['pokemon_species'];
      console.log(this.pokemonList);
    })
  }

  getListPokemons(){
    this.dataApiService.getAllPokemon()
    .subscribe((pokemons) => {this.pokemons = pokemons['results'];
    console.log(this.pokemons);
    });
  }
}
