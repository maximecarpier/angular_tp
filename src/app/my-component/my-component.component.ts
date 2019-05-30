import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeAPIService } from '../poke-api.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  stateCtrl = new FormControl();
  filteredPokemons: Observable<Pokemon[]>;

  choix : Pokemon;

  property: String = 'nom';

  pokemons : Pokemon[] = [];

  panel: number = 1
  pokemon_pannel : Pokemon[];

  opendialog(){

    this.choix = this.stateCtrl.value
    console.log(this.choix);

    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '500px',
      height: '700px',
      data : {pokemon : this.choix}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    
    this.service.getDetails(this.choix.id).subscribe(data => {
      var json = JSON.parse(JSON.stringify(data))

      if(this.choix.types.length == 0){
      for(let i=0; i< json.types.length; i++){
        this.choix.types.push(json.types[i].type.name)
        console.log(this.choix.types);
        
      }}
      this.choix.taille = json.height
      this.choix.poids = json.weight
      
      return
    })

    this.service.getStory(this.choix.id).subscribe(data => {

      var json = JSON.parse(JSON.stringify(data))
      json = json.flavor_text_entries
      
      for(let j=0; j< json.length ; j++){
        if(json[j].language.name == "en"){
          this.choix.story = json[j].flavor_text
        }
      }
      return
    })
  }

  afficher20(){

    this.pokemon_pannel = this.pokemons.slice(this.panel-1,this.panel + 19)
    this.panel += 20

    for(let i=0; i<this.pokemon_pannel.length; i++){

      this.service.getDetails(this.pokemon_pannel[i].id).subscribe(data => {

        var json = JSON.parse(JSON.stringify(data))

        this.pokemon_pannel[i].taille = json.height
        this.pokemon_pannel[i].poids = json.weight

        console.log(json.types);
        
        for(let j=0; j< json.types.length ; j++){
          console.log(json.types[j].type.name);
          this.pokemon_pannel[i].types.push(json.types[j].type.name)
        }
        return
      })

      this.service.getStory(this.pokemon_pannel[i].id).subscribe(data => {

        var json = JSON.parse(JSON.stringify(data))
        json = json.flavor_text_entries
        
        for(let j=0; j< json.length ; j++){
          if(json[j].language.name == "en"){
            this.pokemon_pannel[i].story = json[j].flavor_text
          }
        }
        return
      })

    }

      
    }


  constructor(private service: PokeAPIService, public dialog: MatDialog){
    this.filteredPokemons = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(pokemon => pokemon ? this._filterStates(pokemon.toString()) : this.pokemons.slice())
      );
  }
  private _filterStates(value : string): Pokemon[] {
    
    console.log(value);
    
    const filterValue = value.toLowerCase();

    return this.pokemons.filter(pokemon => pokemon.nom.toLowerCase().indexOf(filterValue) === 0);
  }


  ngOnInit() {
    console.log('ngOnInit');

    this.service.getData().subscribe(data => {

      var json = JSON.parse(JSON.stringify(data))

      for ( let i = 0; i < json.pokemon_entries.length; i++) {
        let name= json.pokemon_entries[i].pokemon_species.name
        let id = json.pokemon_entries[i].entry_number
        let img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'
        this.pokemons.push(new Pokemon(id, name, img))
        
      }
      return
    })



  }


}


