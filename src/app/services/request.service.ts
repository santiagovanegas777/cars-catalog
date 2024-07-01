import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponseInterface } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  getApiCharacters(): Observable<CharacterResponseInterface>{
    return this.httpClient.get<CharacterResponseInterface>('https://api-catalogo-coches.vercel.app/coches')
  }
}
