import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _idInterface } from 'src/app/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {

  constructor(private httpClient: HttpClient) { }

  getApiDetailCharacter(_id: _idInterface):Observable<any>{
    return this.httpClient.get<any>('https://api-catalogo-coches.vercel.app/coches/id/' + _id)

  }
}
