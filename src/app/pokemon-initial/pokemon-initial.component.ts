import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { DataApiService } from '../services/data-api.service';



@Component({
  selector: 'app-pokemon-initial',
  templateUrl: './pokemon-initial.component.html',
  styleUrls: ['./pokemon-initial.component.css']
})
export class PokemonInitialComponent implements OnInit {

  private pokemonInfo: any;
  pokemonVector: Array<any> = [];
  pokemonNames: Array<string> = ["squirtle","charmander","bulbasaur"];
  pokemonImages: Array<any> = ["https://s3-sa-east-1.amazonaws.com/pokedexapp/images/Bulbasaur.jpg","https://s3-sa-east-1.amazonaws.com/pokedexapp/images/Squirtle.jpg","https://s3-sa-east-1.amazonaws.com/pokedexapp/images/Charmander.png"];
  constructor(private dataApiService: DataApiService) { }

  ngOnInit() {
    this.getInitialPokemon();
  }

  getInitialPokemon(){
    for (var i=0;i<3;i++){
      this.dataApiService.getPokemonByName(this.pokemonNames[i]).subscribe((pokemons) =>{
        this.pokemonInfo = pokemons;
        
        this.pokemonVector.push(this.pokemonInfo);
      });
      
     
      //this.pokemonInfo.push();
    }
    console.log(this.pokemonVector);
    
  }

  
}
