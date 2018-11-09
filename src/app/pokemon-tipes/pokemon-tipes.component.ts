import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-pokemon-tipes',
  templateUrl: './pokemon-tipes.component.html',
  styleUrls: ['./pokemon-tipes.component.css']
})
export class PokemonTipesComponent implements OnInit {

  chart = [];
  pokemonNumber: any;
  aux: any;
  length: number;
  typeData: number[] = [];
  constructor(private dataApiService: DataApiService) { }

  ngOnInit() {
    this.getPokemonTypeNumber();
    
  }

  getPokemonTypeNumber(){
    this.typeData = [];
    for (var i=1 ; i<=18; i++){
      this.dataApiService.getPokemonListByType(i).subscribe((pokemonNumber)=>{
        this.aux = pokemonNumber['pokemon'];
        this.typeData.push(this.aux.length);
      });
    }
    console.log(this.typeData);
    
    


    let chart = new Chart('canvas',{
      type: 'pie',
      data:{
        labels:['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy'],
        datasets:[
          {
            label: 'Points',
            data: this.typeData,
            backgroundColor: ['#d3d3d3','#fff4e1','#e9ccb1','#ba68c8','#c6ae01','#4e3b31','#006600','#6a1b9a','#848484','#ff8000','#0066ff','#009900','#ffff00','#ff0080','#33ccff','#cc0000','#414141','#f699cd'],
            borderWidth: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
          }
        ]
      },
      options:{
        
        animation:{
          animateScale: true
        }
      }
    }
    );
  }
}
