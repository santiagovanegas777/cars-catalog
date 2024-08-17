import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterInterface } from 'src/app/models/character.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreatedcarsService {

  constructor(private httpClient: HttpClient) { }

  createdCar(obj:any){
    return this.httpClient.post(`${environment.API}/coches`, obj);
  }
}
