
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {  CharacterInterface, filtercarInterface } from 'src/app/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class FilterCarService {


  constructor(private httpClient:HttpClient) { }

  getApiNameCharacter(cocheName: string): Observable<CharacterInterface>{
    return this.httpClient.get<CharacterInterface>('https://api-catalogo-coches.vercel.app/coches/cocheName/' + cocheName);
  }
}
