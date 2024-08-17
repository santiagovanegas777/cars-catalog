import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _idInterface } from 'src/app/models/character.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpdateprofileService {

  constructor(private httpClient: HttpClient) { }

  updateUser(_id: _idInterface, obj:any){
    return this.httpClient.put(`${environment.API}/users/update/` + _id, obj);
  }
}
