import { User } from 'src/app/models/character.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

  constructor(private httpClient: HttpClient) { }

  getApiUser():Observable<any>{

    return this.httpClient.get(`${environment.API}/users/`,{

    });
  }


}


