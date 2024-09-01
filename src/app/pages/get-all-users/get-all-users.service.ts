import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
