import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _idInterface, CharacterInterface } from 'src/app/models/character.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {

  constructor(private httpClient: HttpClient) { }

  getApiDetailCharacter(_id: _idInterface):Observable<CharacterInterface>{
    return this.httpClient.get<CharacterInterface>(`${environment.API}/coches/id/` + _id);

  }
}
