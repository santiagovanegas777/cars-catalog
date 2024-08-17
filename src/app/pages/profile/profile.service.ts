import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _idInterface } from 'src/app/models/character.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getApiUserProfile(_id: _idInterface):Observable<any>{
    return this.httpClient.get<any>(`${environment.API}/users/id/` + _id)
  }
}
