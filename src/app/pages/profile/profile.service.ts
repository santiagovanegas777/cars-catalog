import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _idInterface, User } from 'src/app/models/character.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getApiUserProfile(_id: _idInterface):Observable<User>{
    return this.httpClient.get<User>(`${environment.API}/users/id/` + _id);
  }
}
