import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string | null = sessionStorage.getItem('token-app');

  constructor(private httpClient: HttpClient) { }


  login(obj:any): Observable<any> {
   return this.httpClient.post(`${environment.API}/users/login`, obj).pipe(
    map((response: any) =>{
      this.token = response.token;
      sessionStorage.setItem('token-app', response.token);
      return response;
    })
   );
  }

  logout(){
    this.token = null;
    sessionStorage.removeItem('token-app');
  }
}
