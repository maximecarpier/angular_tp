import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PokeAPIService {

  constructor(private http : HttpClient) { }

   getData() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/1/')
  }

  getDetails(id){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id)
  } 

  getStory(id){
    return this.http.get('https://pokeapi.co/api/v2/pokemon-species/' + id)
  } 


  
}