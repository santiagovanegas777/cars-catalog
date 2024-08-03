import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


// const API = 'https://api-catalogo-coches.vercel.app/users/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string | null = null;

  constructor(private httpClient: HttpClient) { }


  login(obj:any): Observable<any> {
   return this.httpClient.post('https://api-catalogo-coches.vercel.app/users/login', obj).pipe(
    map((response: any) =>{
      this.token = response.token;
      return response;
    })
   );
  }
}
