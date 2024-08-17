import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _idInterface } from 'src/app/models/character.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeleteprofileService {

  constructor(private httpClient: HttpClient) { }

  removeUser(_id: _idInterface, obj:any){
    return this.httpClient.delete(`${environment.API}/users/delete/` + _id,obj);
  }
}
