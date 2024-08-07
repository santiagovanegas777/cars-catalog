import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterRegisterService {

  constructor(private httpClient: HttpClient) { }


  createUser(obj: any){
    return this.httpClient.post(`${environment.API}/users/register`, obj);

  }

}
