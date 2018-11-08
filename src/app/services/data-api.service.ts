import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from  'rxjs/internal/Observable';
import { from } from 'rxjs';
import { PokemonInterface } from '../models/pokemon-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  pokemons: Observable<any>;
  pokemon: Observable<any>;

  constructor(private http: HttpClient) { }

  getAllPokemon(){
    const url_api = 'https://pokeapi.co/api/v2/pokemon/';
    return this.http.get<any[]>(url_api).pipe(map(data => data));
  }

  getPokemonByName(name: string){
    const url_api = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    return this.http.get(url_api); 
  }

  getPokemonByRegion(regionId: number){
    const url_api = `https://pokeapi.co/api/v2/pokedex/${regionId}/`;
    return this.http.get(url_api);
  }

  getPokemonListByType(typeId: number){
    const url_api = `https://pokeapi.co/api/v2/type/${typeId}/`;
    return this.http.get(url_api);
  }

 
  
    
  }

