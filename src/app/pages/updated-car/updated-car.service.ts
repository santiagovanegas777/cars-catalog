import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _idInterface } from 'src/app/models/character.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpdatedCarService {

  constructor(private httpClient: HttpClient) { }

  updateCar(_id: _idInterface, obj:any){
    return this.httpClient.put(`${environment.API}/coches/update/` + _id,obj);
  }
}
