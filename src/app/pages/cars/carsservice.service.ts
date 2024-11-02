import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponseInterface } from 'src/app/models/character.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CarsserviceService {

  constructor(private httpClient: HttpClient) { }

  getApiCars(numPage: number):Observable<CharacterResponseInterface>{
    return this.httpClient.get<CharacterResponseInterface>
    (`${environment.API}/coches?page=${numPage}`);
   }

  }


